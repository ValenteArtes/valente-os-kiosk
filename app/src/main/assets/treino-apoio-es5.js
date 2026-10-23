/* Apoio de leitura e reforço. Sintaxe ES5 para reutilização no modo leve. */
(function (root) {
  'use strict';
  var synth = root.speechSynthesis, ativo = null, fila = 0, leituraNativa = null, contadorNativo = 0;
  var planos = [
    {assunto:'identificação e limites de acesso',etapa:3,
      explicacao:'O acesso identifica quem está usando o sistema. As permissões definem quais funções estão disponíveis; uma atividade de estudo não amplia essas permissões. Exemplo: Bruno pode consultar tarefas, mas precisa pedir ao responsável uma informação de caixa que seu perfil não permite ver. Ele não deve usar o PIN de outra pessoa.',
      pergunta:'Bruno precisa de um relatório que não aparece no seu perfil. Qual atitude preserva o controle de acesso?',
      opcoes:['Pedir o PIN de uma colega que vê o relatório','Solicitar a informação ou a revisão formal do acesso ao responsável','Entrar com o último usuário usado no tablet'],correta:1,
      feedbacks:['Compartilhar PIN atribui ações à pessoa errada. Cada pessoa deve usar seu próprio acesso.','Isso preserva a identificação e permite ao responsável decidir qual acesso é adequado.','Uma sessão de outra pessoa não autoriza Bruno a usar as funções dela.']},
    {assunto:'comunicação e decisão antes da mudança',etapa:2,
      explicacao:'Uma proposta precisa indicar o fato, o impacto, a alternativa e a decisão necessária. Exemplo: uma embalagem atrasou; antes de substituir, a atendente informa o pedido afetado, o novo custo e o prazo. O responsável avalia e registra a decisão. A proposta não é uma autorização para executar.',
      pergunta:'Uma embalagem alternativa entrega mais rápido, mas custa mais. O que deve acontecer antes da troca?',
      opcoes:['Trocar agora e explicar na próxima reunião','Consultar somente o cliente e omitir o custo interno','Apresentar impacto no prazo e no custo, obter decisão e registrá-la'],correta:2,
      feedbacks:['Explicar depois não permite avaliar o custo antes do compromisso.','O impacto financeiro também precisa ser avaliado por quem pode autorizar a mudança.','A informação permite decidir antes da execução e manter o combinado registrado.']},
    {assunto:'capacidade e compromisso de prazo',etapa:3,
      explicacao:'O prazo depende de todas as etapas até a entrega. Uma máquina livre não garante acabamento e expedição disponíveis. Exemplo: uma peça termina a impressão hoje, mas precisa de dois dias de acabamento. Antes de prometer a entrega, confira a fila e combine a data com os responsáveis.',
      pergunta:'Há impressora livre, mas a pintura tem fila de três dias. Como avaliar uma entrega para amanhã?',
      opcoes:['Consultar a capacidade de todas as etapas e só confirmar uma data viável','Confirmar porque a impressão pode começar hoje','Mover o pedido para envio para reservar a entrega'],correta:0,
      feedbacks:['A análise considera o caminho completo, sem transformar uma hipótese em promessa.','A impressão é apenas parte do processo; a pintura ainda limita o prazo.','Mudar o cartão não elimina o trabalho necessário e distorce o andamento real.']},
    {assunto:'conferência e comunicação de divergências',etapa:3,
      explicacao:'Quando a peça e a especificação divergem, primeiro evite o avanço da peça sob sua responsabilidade, confira a fonte e comunique o fato. Exemplo: um conjunto tem quatro componentes, mas a OT indica cinco. Separe-o para conferência e peça uma decisão antes de alterar a OT ou produzir outro componente.',
      pergunta:'A OT lista cinco componentes e você encontra quatro. Qual é o próximo passo?',
      opcoes:['Alterar a quantidade na OT para quatro','Enviar assim e aguardar reclamação','Evitar o avanço, conferir a especificação e comunicar a divergência'],correta:2,
      feedbacks:['Alterar a OT para coincidir com o que foi encontrado pode esconder uma falta.','Enviar sem conferir transfere a divergência ao cliente e pode gerar retrabalho.','A conferência esclarece o que falta e permite uma correção autorizada.']},
    {assunto:'diferença entre receita e resultado',etapa:3,
      explicacao:'Receita é o valor das vendas. O resultado estimado é a receita menos os custos e despesas considerados. Exemplo: uma venda de 500 reais com 120 reais de materiais e 80 reais de outras despesas deixa 300 reais nessa hipótese. Se ainda faltarem taxas ou tributos, esse valor precisa ser revisto.',
      pergunta:'Uma venda fictícia gera R$ 900; materiais custam R$ 180 e os demais custos e despesas somam R$ 420. Qual resultado estimado, sem outros itens a deduzir?',
      opcoes:['R$ 900','R$ 300','R$ 720'],correta:1,
      feedbacks:['900 reais é a receita. Ainda é preciso deduzir os custos e despesas informados.','900 menos 180 menos 420 resulta em 300 reais, nas condições descritas.','720 reais desconta apenas os materiais; ainda faltam os 420 reais dos demais itens.']},
    {assunto:'margem e dados atuais antes de anunciar',etapa:3,
      explicacao:'Uma venda precisa cobrir os custos e a margem pretendida. Exemplo: antes de abrir um novo canal de venda, a gestora verifica tarifas atuais, embalagem, frete, devoluções e capacidade de entrega. Uma taxa usada no passado pode já não representar o custo de hoje. Os números precisam ser conferidos antes de assumir o compromisso.',
      pergunta:'O frete e a embalagem ficaram mais caros, mesmo com comissão igual. Como avaliar o preço do anúncio?',
      opcoes:['Recalcular o custo total e a margem e alinhar o preço antes de publicar','Manter o preço porque a comissão não mudou','Publicar primeiro para descobrir se o preço cobre o custo'],correta:0,
      feedbacks:['A decisão usa todos os custos relevantes, e não apenas a comissão.','Outros custos também afetam a margem; comissão igual não significa resultado igual.','A conferência prévia evita assumir uma venda sem conhecer o resultado esperado.']}
  ];
  function texto(valor) {
    return String(valor == null ? '' : valor).replace(/<[^>]*>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,' e ').replace(/\s+/g,' ').trim();
  }
  function narracao(e) {
    var partes = [e.titulo || ''];
    if(e.tipo === 'conteudo') partes.push(e.texto);
    else if(e.tipo === 'multipla_escolha') { partes.push(e.pergunta); for(var i=0;i<e.opcoes.length;i++) partes.push('Alternativa '+(i+1)+'. '+e.opcoes[i]); }
    else if(e.tipo === 'verdadeiro_falso') partes.push(e.afirmacao,'Verdadeiro ou falso?');
    else if(e.tipo === 'resposta_cliente') {partes.push(e.cliente);for(var j=0;j<e.opcoes.length;j++)partes.push('Alternativa '+(j+1)+'. '+e.opcoes[j].label);}
    else if(e.tipo === 'texto_livre') partes.push(e.pergunta);
    else if(e.tipo === 'checklist') partes=partes.concat(e.itens || []);
    else if(e.tipo === 'missao') partes=partes.concat([e.objetivo,e.contexto],e.tarefas || [],[e.criterioConclusao]);
    else if(e.tipo === 'confirmacao_pratica') partes.push(e.instrucao);
    else if(e.tipo === 'ordenar') {
      partes.push(e.instrucao);
      var indices=ordemApresentacao((e.itens||[]).length);
      for(var o=0;o<indices.length;o++)partes.push(e.itens[indices[o]]);
    }
    else if(e.tipo === 'selecionar_itens') partes=partes.concat([e.pergunta],e.itens || []);
    // Cenários possuem nós diferentes: só a voz dinâmica deve ler o nó visível.
    return texto(partes.filter(function(v){return !!v;}).join('. '));
  }
  function ordemApresentacao(total) {
    var indices=[],seed=137,i,j,tmp,igual=true;
    for(i=0;i<total;i++)indices.push(i);
    for(i=total-1;i>0;i--){seed=(seed*9301+49297)%233280;j=Math.floor(seed/233280*(i+1));tmp=indices[i];indices[i]=indices[j];indices[j]=tmp;}
    for(i=0;i<total;i++)if(indices[i]!==i)igual=false;
    if(igual&&total>1)indices.push(indices.shift());
    return indices;
  }
  function parar() {
    fila++;
    leituraNativa=null;
    if(root.ValenteVoice && root.ValenteVoice.stop)try{root.ValenteVoice.stop();}catch(ignoreNative){}
    if(ativo) {try {ativo.pause();ativo.currentTime=0;}catch(ignore){} ativo=null;}
    if(synth) try{synth.cancel();}catch(ignore2){}
  }
  function voz(container, fala, arquivo) {
    parar();
    if(!container) return;
    container.innerHTML='<div class="trein-audio"><strong>Ouvir esta etapa</strong><div id="treinPlayer"></div><p id="treinVozStatus" role="status"></p></div>';
    var area=container.querySelector('#treinPlayer'),status=container.querySelector('#treinVozStatus');
    if(!arquivo && root.ValenteVoice && root.ValenteVoice.speak && root.ValenteVoice.status) {
      area.innerHTML='<button type="button" id="treinOuvir">Ouvir</button><button type="button" id="treinPausar">Pausar</button><button type="button" id="treinRetomar">Retomar trecho</button><button type="button" id="treinParar">Parar</button>';
      status.textContent='Leitura pelo Android. Ao retomar, o trecho interrompido é lido desde o início.';
      var enviar=function(){
        if(!leituraNativa || leituraNativa.pausada)return;
        if(leituraNativa.indice>=leituraNativa.trechos.length){status.textContent='Leitura concluída.';leituraNativa=null;return;}
        leituraNativa.token='v'+fila+'_'+(++contadorNativo);
        try{root.ValenteVoice.speak(leituraNativa.trechos[leituraNativa.indice],leituraNativa.token);}catch(e){status.textContent='Não foi possível iniciar a voz. A aula continua por texto.';leituraNativa=null;}
      };
      area.querySelector('#treinOuvir').onclick=function(){
        parar();var disponivel;
        try{disponivel=root.ValenteVoice.status();}catch(e){disponivel='unavailable';}
        if(disponivel!=='ready'){
          status.textContent=disponivel==='initializing'?'A voz ainda está iniciando. Aguarde um momento e toque em Ouvir novamente.':disponivel==='missing-language'?'Falta uma voz em português no Android. Peça ao responsável para verificar a configuração de conversão de texto em voz.':'A voz do Android não está disponível. A aula continua por texto.';
          return;
        }
        leituraNativa={trechos:texto(fala).match(/.{1,180}(?:\s|$)|\S+/g)||[],indice:0,pausada:false,token:null,continuar:enviar};
        status.textContent='Lendo pelo Android.';enviar();
      };
      area.querySelector('#treinPausar').onclick=function(){if(leituraNativa){leituraNativa.pausada=true;leituraNativa.token=null;root.ValenteVoice.stop();status.textContent='Leitura pausada.';}};
      area.querySelector('#treinRetomar').onclick=function(){if(leituraNativa&&leituraNativa.pausada){leituraNativa.pausada=false;enviar();}};
      area.querySelector('#treinParar').onclick=function(){parar();status.textContent='Leitura interrompida.';};
      return;
    }
    if(arquivo && root.ValenteVoice && root.ValenteVoice.playAudio !== undefined) {
      var nomeAud=arquivo.replace(/^.*\//,'').replace(/\.mp3$/,'');
      area.innerHTML='<button type="button" id="treinOuvir">Ouvir</button><button type="button" id="treinPausar">Pausar</button><button type="button" id="treinRetomar">Continuar</button><button type="button" id="treinParar">Parar</button>';
      status.textContent='Narração gravada em português.';
      area.querySelector('#treinOuvir').onclick=function(){root.ValenteVoice.playAudio(nomeAud);status.textContent='Tocando a narração.';};
      area.querySelector('#treinPausar').onclick=function(){root.ValenteVoice.pauseAudio();status.textContent='Narração pausada.';};
      area.querySelector('#treinRetomar').onclick=function(){root.ValenteVoice.resumeAudio();status.textContent='Tocando a narração.';};
      area.querySelector('#treinParar').onclick=function(){root.ValenteVoice.stop();status.textContent='Narração interrompida.';};
      return;
    }
    if(arquivo) {
      area.innerHTML='<audio controls preload="none" src="'+arquivo+'"></audio>';
      ativo=area.querySelector('audio');
      ativo.addEventListener('error',function(){status.textContent='Não foi possível abrir o áudio. Confira se a pasta audios foi copiada junto. O texto continua disponível.';});
      status.textContent='Toque em reproduzir. A narração não inclui o gabarito.';
      return;
    }
    if(!synth || !root.SpeechSynthesisUtterance) {status.textContent='Este navegador não oferece voz para esta etapa. A aula continua disponível por texto.';return;}
    area.innerHTML='<button type="button" id="treinOuvir">Ouvir</button><button type="button" id="treinPausar">Pausar</button><button type="button" id="treinRetomar">Continuar áudio</button><button type="button" id="treinParar">Parar</button>';
    area.querySelector('#treinOuvir').onclick=function(){
      parar();var minhaFila=fila;var trechos=texto(fala).match(/.{1,180}(?:\s|$)|\S+/g) || [];
      function proximo(){if(minhaFila!==fila||!trechos.length)return;var u=new root.SpeechSynthesisUtterance(trechos.shift());u.lang='pt-BR';u.rate=0.9;u.onend=proximo;u.onerror=function(){status.textContent='A voz não está disponível. Continue pelo texto.';};synth.speak(u);}
      proximo();
    };
    area.querySelector('#treinPausar').onclick=function(){synth.pause();};
    area.querySelector('#treinRetomar').onclick=function(){synth.resume();};
    area.querySelector('#treinParar').onclick=parar;
  }
  root.ValenteAudioEvent=function(nome,evento){
    var el=root.document&&root.document.getElementById('treinVozStatus');
    if(!el)return;
    if(evento==='ended')el.textContent='Narração concluída.';
    else if(evento==='error')el.textContent='Não foi possível tocar o áudio. O texto continua disponível.';
  };
  root.ValenteNativeVoiceEvent=function(token,event){
    if(!leituraNativa || token!==leituraNativa.token || leituraNativa.pausada)return;
    if(event==='done'){leituraNativa.indice++;leituraNativa.continuar();}
    else {
      var aviso=root.document&&root.document.getElementById('treinVozStatus');
      leituraNativa=null;
      if(aviso)aviso.textContent='A leitura não pôde continuar. Confira a voz em português nas configurações do Android e tente novamente.';
    }
  };
  function sugestao(etapas,indice,r) {
    if(!r || r.acertou !== false)return null;
    var alvo=-1;
    for(var i=indice-1;i>=0;i--) if(etapas[i].tipo==='conteudo') {if(alvo<0)alvo=i;if(/exemplo/i.test(etapas[i].titulo||'')){alvo=i;break;}}
    return {etapa:alvo,repetido:(r.tentativas||0)>=2};
  }
  root.ValenteApoio={arquivo:function(t,d,i){var m=root.VALENTE_AUDIOS,k=t+'_d'+d+'_e'+(i+1);return m&&m[k]?'audios/'+k+'.mp3':null;},planos:planos,texto:texto,narracao:narracao,voz:voz,parar:parar,sugestao:sugestao,ordemApresentacao:ordemApresentacao};
  if(root.addEventListener) {root.addEventListener('pagehide',parar,false);root.addEventListener('blur',parar,false);}
  if(root.document && root.document.addEventListener) {
    root.document.addEventListener('visibilitychange',function(){if(root.document.hidden)parar();},false);
    root.document.addEventListener('click',function(event){
      var el=event.target;
      while(el && el.getAttribute) {
        if(el.getAttribute('data-tab') || el.id==='btnSairOperador' || el.id==='btnVoltarInbox'){parar();return;}
        el=el.parentNode;
      }
    },false);
  }
})(typeof window !== 'undefined' ? window : this);
(typeof window!=='undefined'?window:this).VALENTE_AUDIOS={"integracao_d1_e1":1,"integracao_d1_e2":1,"integracao_d1_e3":1,"integracao_d1_e4":1,"integracao_d1_e5":1,"integracao_d1_e6":1,"integracao_d1_e7":1,"integracao_d2_e1":1,"integracao_d2_e2":1,"integracao_d2_e3":1,"integracao_d2_e4":1,"integracao_d2_e5":1,"integracao_d2_e6":1,"integracao_d2_e7":1,"integracao_d3_e1":1,"integracao_d3_e2":1,"integracao_d3_e3":1,"integracao_d3_e4":1,"integracao_d3_e5":1,"integracao_d3_e6":1,"integracao_d3_e7":1,"integracao_d4_e1":1,"integracao_d4_e2":1,"integracao_d4_e3":1,"integracao_d4_e4":1,"integracao_d4_e5":1,"integracao_d4_e6":1,"integracao_d4_e7":1,"integracao_d5_e1":1,"integracao_d5_e2":1,"integracao_d5_e3":1,"integracao_d5_e4":1,"integracao_d5_e5":1,"integracao_d5_e6":1,"integracao_d6_e1":1,"integracao_d6_e2":1,"integracao_d6_e3":1,"integracao_d6_e4":1,"integracao_d6_e5":1,"integracao_d6_e6":1,"integracao_d6_e7":1,"integracao_d6_e8":1,"integracao_d7_e1":1,"integracao_d7_e2":1,"integracao_d7_e3":1,"integracao_d7_e4":1,"integracao_d7_e5":1,"integracao_d7_e6":1,"integracao_d7_e7":1,"integracao_d7_e8":1,"integracao_d8_e1":1,"integracao_d8_e2":1,"integracao_d8_e3":1,"integracao_d8_e4":1,"integracao_d8_e5":1,"integracao_d8_e6":1,"integracao_d9_e1":1,"integracao_d9_e2":1,"integracao_d9_e3":1,"integracao_d9_e4":1,"integracao_d9_e6":1,"integracao_d10_e1":1,"integracao_d10_e2":1,"integracao_d10_e3":1,"integracao_d10_e5":1,"comercial_d1_e1":1,"comercial_d1_e2":1,"comercial_d1_e3":1,"comercial_d1_e4":1,"comercial_d1_e5":1,"comercial_d1_e6":1,"comercial_d1_e7":1,"comercial_d1_e8":1,"comercial_d1_e9":1,"comercial_d1_e10":1,"comercial_d1_e11":1,"comercial_d1_e12":1,"comercial_d2_e1":1,"comercial_d2_e2":1,"comercial_d2_e3":1,"comercial_d2_e4":1,"comercial_d2_e5":1,"comercial_d2_e6":1,"comercial_d2_e7":1,"comercial_d2_e8":1,"comercial_d2_e9":1,"comercial_d2_e10":1,"comercial_d2_e11":1,"comercial_d3_e1":1,"comercial_d3_e2":1,"comercial_d3_e3":1,"comercial_d3_e4":1,"comercial_d3_e5":1,"comercial_d3_e6":1,"comercial_d3_e7":1,"comercial_d4_e1":1,"comercial_d4_e2":1,"comercial_d4_e3":1,"comercial_d4_e4":1,"comercial_d4_e5":1,"comercial_d4_e6":1,"comercial_d4_e7":1,"comercial_d4_e8":1,"comercial_d4_e9":1,"comercial_d4_e10":1,"comercial_d4_e11":1,"comercial_d5_e1":1,"comercial_d5_e2":1,"comercial_d5_e3":1,"comercial_d5_e4":1,"comercial_d5_e5":1,"comercial_d5_e6":1,"comercial_d5_e7":1,"comercial_d5_e8":1,"comercial_d5_e9":1,"comercial_d5_e10":1,"comercial_d6_e1":1,"comercial_d6_e2":1,"comercial_d6_e3":1,"comercial_d6_e4":1,"comercial_d6_e5":1,"comercial_d6_e6":1,"comercial_d6_e7":1,"comercial_d6_e8":1,"comercial_d6_e9":1,"comercial_d7_e1":1,"comercial_d7_e2":1,"comercial_d7_e3":1,"comercial_d7_e4":1,"comercial_d7_e5":1,"comercial_d7_e6":1,"comercial_d7_e7":1,"comercial_d8_e1":1,"comercial_d8_e2":1,"comercial_d8_e3":1,"comercial_d8_e4":1,"comercial_d8_e5":1,"comercial_d8_e6":1,"comercial_d8_e7":1,"comercial_d8_e8":1,"comercial_d9_e1":1,"comercial_d9_e2":1,"comercial_d9_e3":1,"comercial_d9_e4":1,"comercial_d9_e5":1,"comercial_d9_e6":1,"comercial_d9_e7":1,"comercial_d9_e8":1,"comercial_d9_e9":1,"comercial_d9_e10":1,"comercial_d9_e11":1,"comercial_d9_e12":1,"comercial_d10_e1":1,"comercial_d10_e3":1,"comercial_d10_e4":1,"comercial_d10_e5":1,"comercial_d10_e6":1,"modelagem_3d_d1_e1":1,"modelagem_3d_d1_e2":1,"modelagem_3d_d1_e3":1,"modelagem_3d_d1_e4":1,"modelagem_3d_d1_e5":1,"modelagem_3d_d1_e6":1,"modelagem_3d_d1_e7":1,"modelagem_3d_d2_e1":1,"modelagem_3d_d2_e2":1,"modelagem_3d_d2_e3":1,"modelagem_3d_d2_e4":1,"modelagem_3d_d2_e5":1,"modelagem_3d_d2_e6":1,"modelagem_3d_d3_e1":1,"modelagem_3d_d3_e2":1,"modelagem_3d_d3_e3":1,"modelagem_3d_d3_e4":1,"modelagem_3d_d3_e5":1,"modelagem_3d_d3_e6":1,"modelagem_3d_d4_e1":1,"modelagem_3d_d4_e2":1,"modelagem_3d_d4_e3":1,"modelagem_3d_d4_e4":1,"modelagem_3d_d4_e5":1,"modelagem_3d_d4_e6":1,"modelagem_3d_d5_e1":1,"modelagem_3d_d5_e2":1,"modelagem_3d_d5_e3":1,"modelagem_3d_d5_e4":1,"modelagem_3d_d5_e5":1,"modelagem_3d_d5_e6":1,"modelagem_3d_d6_e1":1,"modelagem_3d_d6_e2":1,"modelagem_3d_d6_e3":1,"modelagem_3d_d6_e4":1,"modelagem_3d_d6_e5":1,"modelagem_3d_d6_e6":1,"modelagem_3d_d7_e1":1,"modelagem_3d_d7_e2":1,"modelagem_3d_d7_e3":1,"modelagem_3d_d7_e4":1,"modelagem_3d_d7_e5":1,"modelagem_3d_d7_e6":1,"modelagem_3d_d7_e7":1,"modelagem_3d_d8_e1":1,"modelagem_3d_d8_e2":1,"modelagem_3d_d8_e3":1,"modelagem_3d_d8_e4":1,"modelagem_3d_d8_e5":1,"modelagem_3d_d8_e6":1,"modelagem_3d_d8_e7":1,"modelagem_3d_d8_e8":1,"modelagem_3d_d8_e9":1,"modelagem_3d_d9_e1":1,"modelagem_3d_d9_e2":1,"modelagem_3d_d9_e3":1,"modelagem_3d_d9_e4":1,"modelagem_3d_d9_e5":1,"modelagem_3d_d9_e6":1,"modelagem_3d_d9_e7":1,"modelagem_3d_d10_e1":1,"modelagem_3d_d10_e2":1,"modelagem_3d_d10_e4":1,"impressao_3d_d1_e1":1,"impressao_3d_d1_e2":1,"impressao_3d_d1_e3":1,"impressao_3d_d1_e4":1,"impressao_3d_d1_e5":1,"impressao_3d_d2_e1":1,"impressao_3d_d2_e2":1,"impressao_3d_d2_e3":1,"impressao_3d_d2_e4":1,"impressao_3d_d2_e5":1,"impressao_3d_d2_e6":1,"impressao_3d_d3_e1":1,"impressao_3d_d3_e2":1,"impressao_3d_d3_e3":1,"impressao_3d_d3_e4":1,"impressao_3d_d3_e5":1,"impressao_3d_d3_e6":1,"impressao_3d_d4_e1":1,"impressao_3d_d4_e2":1,"impressao_3d_d4_e3":1,"impressao_3d_d4_e4":1,"impressao_3d_d4_e5":1,"impressao_3d_d4_e6":1,"impressao_3d_d5_e1":1,"impressao_3d_d5_e2":1,"impressao_3d_d5_e3":1,"impressao_3d_d5_e4":1,"impressao_3d_d5_e5":1,"impressao_3d_d5_e6":1,"impressao_3d_d6_e1":1,"impressao_3d_d6_e2":1,"impressao_3d_d6_e3":1,"impressao_3d_d6_e4":1,"impressao_3d_d6_e6":1,"impressao_3d_d7_e1":1,"impressao_3d_d7_e2":1,"impressao_3d_d7_e3":1,"impressao_3d_d7_e4":1,"impressao_3d_d7_e5":1,"impressao_3d_d7_e6":1,"impressao_3d_d7_e7":1,"impressao_3d_d7_e8":1,"impressao_3d_d8_e1":1,"impressao_3d_d8_e2":1,"impressao_3d_d8_e3":1,"impressao_3d_d8_e4":1,"impressao_3d_d8_e5":1,"impressao_3d_d8_e6":1,"impressao_3d_d9_e1":1,"impressao_3d_d9_e2":1,"impressao_3d_d9_e3":1,"impressao_3d_d9_e4":1,"impressao_3d_d9_e5":1,"impressao_3d_d9_e6":1,"impressao_3d_d10_e1":1,"impressao_3d_d10_e2":1,"impressao_3d_d10_e4":1,"pos_impressao_d1_e1":1,"pos_impressao_d1_e2":1,"pos_impressao_d1_e3":1,"pos_impressao_d1_e4":1,"pos_impressao_d1_e5":1,"pos_impressao_d1_e6":1,"pos_impressao_d1_e7":1,"pos_impressao_d2_e1":1,"pos_impressao_d2_e2":1,"pos_impressao_d2_e3":1,"pos_impressao_d2_e4":1,"pos_impressao_d2_e5":1,"pos_impressao_d2_e6":1,"pos_impressao_d3_e1":1,"pos_impressao_d3_e2":1,"pos_impressao_d3_e3":1,"pos_impressao_d3_e4":1,"pos_impressao_d3_e5":1,"pos_impressao_d3_e6":1,"pos_impressao_d3_e7":1,"pos_impressao_d4_e1":1,"pos_impressao_d4_e2":1,"pos_impressao_d4_e3":1,"pos_impressao_d4_e4":1,"pos_impressao_d4_e5":1,"pos_impressao_d4_e6":1,"pos_impressao_d5_e1":1,"pos_impressao_d5_e2":1,"pos_impressao_d5_e3":1,"pos_impressao_d5_e4":1,"pos_impressao_d5_e5":1,"pos_impressao_d5_e6":1,"pos_impressao_d6_e1":1,"pos_impressao_d6_e2":1,"pos_impressao_d6_e3":1,"pos_impressao_d6_e4":1,"pos_impressao_d6_e5":1,"pos_impressao_d6_e6":1,"pos_impressao_d7_e1":1,"pos_impressao_d7_e2":1,"pos_impressao_d7_e3":1,"pos_impressao_d7_e4":1,"pos_impressao_d7_e5":1,"pos_impressao_d7_e6":1,"pos_impressao_d7_e7":1,"pos_impressao_d8_e1":1,"pos_impressao_d8_e2":1,"pos_impressao_d8_e3":1,"pos_impressao_d8_e4":1,"pos_impressao_d8_e5":1,"pos_impressao_d8_e6":1,"pos_impressao_d9_e1":1,"pos_impressao_d9_e2":1,"pos_impressao_d9_e3":1,"pos_impressao_d9_e4":1,"pos_impressao_d9_e5":1,"pos_impressao_d9_e6":1,"pos_impressao_d9_e7":1,"pos_impressao_d9_e8":1,"pos_impressao_d10_e1":1,"pos_impressao_d10_e2":1,"pos_impressao_d10_e4":1,"pintura_d1_e1":1,"pintura_d1_e2":1,"pintura_d1_e3":1,"pintura_d1_e4":1,"pintura_d1_e5":1,"pintura_d1_e6":1,"pintura_d1_e7":1,"pintura_d2_e1":1,"pintura_d2_e2":1,"pintura_d2_e3":1,"pintura_d2_e4":1,"pintura_d2_e5":1,"pintura_d2_e6":1,"pintura_d2_e7":1,"pintura_d2_e8":1,"pintura_d2_e9":1,"pintura_d3_e1":1,"pintura_d3_e2":1,"pintura_d3_e3":1,"pintura_d3_e4":1,"pintura_d3_e5":1,"pintura_d3_e6":1,"pintura_d4_e1":1,"pintura_d4_e2":1,"pintura_d4_e3":1,"pintura_d4_e4":1,"pintura_d4_e5":1,"pintura_d4_e6":1,"pintura_d5_e1":1,"pintura_d5_e2":1,"pintura_d5_e3":1,"pintura_d5_e4":1,"pintura_d5_e5":1,"pintura_d5_e6":1,"pintura_d5_e7":1,"pintura_d5_e8":1,"pintura_d6_e1":1,"pintura_d6_e2":1,"pintura_d6_e3":1,"pintura_d6_e4":1,"pintura_d6_e5":1,"pintura_d6_e6":1,"pintura_d7_e1":1,"pintura_d7_e2":1,"pintura_d7_e3":1,"pintura_d7_e4":1,"pintura_d7_e5":1,"pintura_d7_e6":1,"pintura_d8_e1":1,"pintura_d8_e2":1,"pintura_d8_e3":1,"pintura_d8_e4":1,"pintura_d8_e5":1,"pintura_d8_e6":1,"pintura_d9_e1":1,"pintura_d9_e2":1,"pintura_d9_e3":1,"pintura_d9_e4":1,"pintura_d9_e5":1,"pintura_d9_e6":1,"pintura_d9_e7":1,"pintura_d9_e8":1,"pintura_d10_e1":1,"pintura_d10_e2":1,"pintura_d10_e3":1,"pintura_d10_e5":1,"expedicao_d1_e1":1,"expedicao_d1_e2":1,"expedicao_d1_e3":1,"expedicao_d1_e4":1,"expedicao_d1_e5":1,"expedicao_d1_e6":1,"expedicao_d2_e1":1,"expedicao_d2_e2":1,"expedicao_d2_e3":1,"expedicao_d2_e4":1,"expedicao_d2_e5":1,"expedicao_d2_e6":1,"expedicao_d2_e7":1,"expedicao_d3_e1":1,"expedicao_d3_e2":1,"expedicao_d3_e3":1,"expedicao_d3_e4":1,"expedicao_d3_e5":1,"expedicao_d3_e6":1,"expedicao_d3_e7":1,"expedicao_d3_e8":1,"expedicao_d4_e1":1,"expedicao_d4_e2":1,"expedicao_d4_e3":1,"expedicao_d4_e4":1,"expedicao_d4_e5":1,"expedicao_d5_e1":1,"expedicao_d5_e2":1,"expedicao_d5_e3":1,"expedicao_d5_e4":1,"expedicao_d5_e5":1,"expedicao_d5_e6":1,"expedicao_d5_e7":1,"expedicao_d6_e1":1,"expedicao_d6_e2":1,"expedicao_d6_e3":1,"expedicao_d6_e4":1,"expedicao_d6_e5":1,"expedicao_d6_e6":1,"expedicao_d7_e1":1,"expedicao_d7_e2":1,"expedicao_d7_e3":1,"expedicao_d7_e4":1,"expedicao_d7_e5":1,"expedicao_d7_e6":1,"expedicao_d8_e1":1,"expedicao_d8_e2":1,"expedicao_d8_e3":1,"expedicao_d8_e4":1,"expedicao_d8_e5":1,"expedicao_d8_e6":1,"expedicao_d8_e7":1,"expedicao_d8_e8":1,"expedicao_d9_e1":1,"expedicao_d9_e2":1,"expedicao_d9_e3":1,"expedicao_d9_e4":1,"expedicao_d9_e5":1,"expedicao_d9_e6":1,"expedicao_d9_e7":1,"expedicao_d9_e8":1,"expedicao_d10_e1":1,"expedicao_d10_e2":1,"expedicao_d10_e4":1,"gestao_producao_d1_e1":1,"gestao_producao_d1_e2":1,"gestao_producao_d1_e3":1,"gestao_producao_d1_e4":1,"gestao_producao_d1_e5":1,"gestao_producao_d1_e6":1,"gestao_producao_d1_e7":1,"gestao_producao_d1_e8":1,"gestao_producao_d1_e9":1,"gestao_producao_d2_e1":1,"gestao_producao_d2_e2":1,"gestao_producao_d2_e3":1,"gestao_producao_d2_e4":1,"gestao_producao_d2_e5":1,"gestao_producao_d2_e6":1,"gestao_producao_d2_e7":1,"gestao_producao_d2_e8":1,"gestao_producao_d3_e1":1,"gestao_producao_d3_e2":1,"gestao_producao_d3_e3":1,"gestao_producao_d3_e4":1,"gestao_producao_d3_e5":1,"gestao_producao_d3_e6":1,"gestao_producao_d3_e7":1,"gestao_producao_d3_e8":1,"gestao_producao_d4_e1":1,"gestao_producao_d4_e2":1,"gestao_producao_d4_e3":1,"gestao_producao_d4_e4":1,"gestao_producao_d4_e5":1,"gestao_producao_d4_e6":1,"gestao_producao_d4_e7":1,"gestao_producao_d4_e8":1,"gestao_producao_d5_e1":1,"gestao_producao_d5_e2":1,"gestao_producao_d5_e3":1,"gestao_producao_d5_e4":1,"gestao_producao_d5_e5":1,"gestao_producao_d5_e6":1,"gestao_producao_d5_e7":1,"gestao_producao_d5_e8":1,"gestao_producao_d6_e1":1,"gestao_producao_d6_e2":1,"gestao_producao_d6_e3":1,"gestao_producao_d6_e4":1,"gestao_producao_d6_e5":1,"gestao_producao_d6_e6":1,"gestao_producao_d6_e7":1,"gestao_producao_d6_e8":1,"gestao_producao_d7_e1":1,"gestao_producao_d7_e2":1,"gestao_producao_d7_e3":1,"gestao_producao_d7_e4":1,"gestao_producao_d7_e5":1,"gestao_producao_d7_e6":1,"gestao_producao_d7_e7":1,"gestao_producao_d7_e8":1,"gestao_producao_d8_e1":1,"gestao_producao_d8_e2":1,"gestao_producao_d8_e3":1,"gestao_producao_d8_e4":1,"gestao_producao_d8_e5":1,"gestao_producao_d8_e6":1,"gestao_producao_d8_e7":1,"gestao_producao_d8_e8":1,"gestao_producao_d9_e1":1,"gestao_producao_d9_e2":1,"gestao_producao_d9_e3":1,"gestao_producao_d9_e4":1,"gestao_producao_d9_e5":1,"gestao_producao_d9_e6":1,"gestao_producao_d10_e1":1,"gestao_producao_d10_e2":1,"gestao_producao_d10_e4":1,"academia_gestao_d1_e1":1,"academia_gestao_d1_e2":1,"academia_gestao_d1_e3":1,"academia_gestao_d1_e4":1,"academia_gestao_d1_e5":1,"academia_gestao_d1_e6":1,"academia_gestao_d1_e7":1,"academia_gestao_d1_e8":1,"academia_gestao_d2_e1":1,"academia_gestao_d2_e2":1,"academia_gestao_d2_e3":1,"academia_gestao_d2_e4":1,"academia_gestao_d2_e5":1,"academia_gestao_d2_e6":1,"academia_gestao_d2_e7":1,"academia_gestao_d2_e8":1,"academia_gestao_d3_e1":1,"academia_gestao_d3_e2":1,"academia_gestao_d3_e3":1,"academia_gestao_d3_e4":1,"academia_gestao_d3_e5":1,"academia_gestao_d3_e6":1,"academia_gestao_d3_e7":1,"academia_gestao_d3_e8":1,"academia_gestao_d4_e1":1,"academia_gestao_d4_e2":1,"academia_gestao_d4_e3":1,"academia_gestao_d4_e4":1,"academia_gestao_d4_e5":1,"academia_gestao_d4_e6":1,"academia_gestao_d4_e7":1,"academia_gestao_d4_e8":1,"academia_gestao_d5_e1":1,"academia_gestao_d5_e2":1,"academia_gestao_d5_e3":1,"academia_gestao_d5_e4":1,"academia_gestao_d5_e5":1,"academia_gestao_d5_e6":1,"academia_gestao_d5_e7":1,"academia_gestao_d5_e8":1,"academia_gestao_d6_e1":1,"academia_gestao_d6_e2":1,"academia_gestao_d6_e3":1,"academia_gestao_d6_e4":1,"academia_gestao_d6_e5":1,"academia_gestao_d6_e6":1,"academia_gestao_d6_e7":1,"academia_gestao_d6_e8":1};
