/* ═══════════════════════════════════════════════════════════════════════
   VALENTE OS — CENTRO DE CAPACITAÇÃO — CONTEÚDO (versão ES5 pra tablets antigos)
   Gerado a partir de treinamento-conteudo.js (v131 / trilha.versao=3).
   Conteúdo é só dados (objetos/arrays/strings) — a única mudança real
   pra ficar ES5 é troca de `const` por `var`. Mantém sincronizado com o
   arquivo moderno sempre que a trilha Comercial for revisada.
   ═══════════════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════════════════
// VALENTE OS — CENTRO DE CAPACITAÇÃO — CONTEÚDO
// ═══════════════════════════════════════════════════════════════════════════
// Arquivo só de DADOS. Nenhuma lógica de interface aqui — isso fica em
// treinamento.js. A ideia é poder editar/criar uma trilha inteira sem
// precisar mexer no motor.
//
// v119 — ajuste estrutural: a entidade principal é a TRILHA, não "o curso
// comercial". "Comercial" é hoje a primeira trilha, mas o motor foi escrito
// pra tratar qualquer trilha do mesmo jeito. Trilhas futuras (producao,
// pintura, acabamento, modelagem, atendimento, gestao, procedimentos...)
// entram só adicionando outra chave abaixo — nada no motor precisa mudar.
//
// v129 — CONTEÚDO REESCRITO conforme revisão entregue pelo responsável
// (documento "Formação Comercial Valente — Aulas Revisadas"). Princípio
// pedagógico seguido: cada aula caminha por situação → conceito → exemplo →
// decisão → erro → correção → nova situação → prática. Alternativas erradas
// são plausíveis (coisas que um iniciante realmente faria), nada de
// pegadinha irreal. Onde uma regra de negócio da Valente ainda não foi
// definida (% de desconto, taxa de marketplace, política de entrada/saldo,
// prazo padrão), o conteúdo usa CONSULTAR RESPONSÁVEL — nenhuma regra foi
// inventada neste arquivo.
//
// v131 — CONTEÚDO REESCRITO DE NOVO conforme "Formação Comercial Valente v3
// — Ferramentas primeiro, atendimento depois" (docx enviado pelo responsável).
// Mudança estrutural: Dias 1-4 agora são um TOUR GUIADO pelas ferramentas
// reais (Pedidos/Kanban, Peças Próprias, Caixa, Orçamento) e pelos tipos de
// demanda/orçamento — sem nenhum atendimento ao cliente ainda. Só a partir
// do Dia 5 entra RECEBER→ENTENDER→CONFIRMAR→APRESENTAR→CONDUZIR, já usando
// o que foi visto nos tours. Critério de qualidade pedagógica do documento:
// "o colaborador já recebeu explicação, demonstração ou prática suficiente
// pra chegar nesta resposta? Se não, falta conteúdo antes da avaliação."
//
// Cada trilha tem:
//   id                 — igual à chave do objeto (redundante de propósito,
//                         fica mais fácil de usar a trilha isolada em algum
//                         lugar sem precisar saber sob qual chave ela vive)
//   nome, descricao     — texto de apresentação
//   icone               — emoji usado nos cards
//   versao              — versão DESTA trilha (não é mais um número global!
//                          cada trilha evolui e versiona de forma independente;
//                          ao revisar o conteúdo de uma trilha de forma
//                          relevante, incrementa só o versao dela — o
//                          progresso salvo com a versão anterior continua no
//                          histórico, sem se misturar com o novo)
//   cargosPermitidos    — array de cargos que enxergam esta trilha no Centro
//                          de Capacitação. null/ausente = visível pra
//                          qualquer colaborador identificado (mesmo padrão
//                          já usado em ABAS_PERMITIDAS_POR_CARGO no app.js:
//                          lista = restrito, ausência = sem restrição)
//   competencias        — lista de competências que a trilha desenvolve.
//   criteriosConclusao  — hoje null = "concluir todos os dias/aulas" (regra
//                          padrão aplicada pelo motor).
//   dias                — granularidade "dia" (cada dia = uma aula).
//
// ETAPAS DA AULA (motor de navegação)
// Cada dia tem um array `etapas`. Cada etapa tem um `tipo`, reconhecido pelo
// motor (treinamento.js):
//   conteudo          — texto informativo, sem resposta obrigatória
//   multipla_escolha  — pergunta + opções, 1 correta (`erroCriticoOpcoes`
//                        marca índices de opções que, se escolhidas, contam
//                        como erro crítico no resultado por competência)
//   verdadeiro_falso  — afirmação + Verdadeiro/Falso
//   resposta_cliente  — balão de cliente + opções, cada uma com sua própria
//                        correta/feedback/erroCritico
//   selecionar_itens  — múltipla seleção com conjunto correto de itens
//   ordenar           — ordenar itens (já listados na ORDEM CORRETA no
//                        conteúdo — o motor embaralha a exibição sozinho)
//   cenario           — diálogo em nós (nos: {a:{...}, b:{...}}), cada opção
//                        pode levar a `proximo` nó; sem `proximo` o cenário
//                        encerra. Permite revelar informação progressivamente,
//                        como na missão do Dia 10.
//   checklist         — todos os itens precisam ser marcados pra avançar
//   missao            — bloco maior (objetivo/contexto/tarefas/critério),
//                        exige anotação escrita por tarefa pra concluir
//                        (v127); `local`, quando informado, aponta pra uma
//                        aba real do sistema — sem ele, é raciocínio/anotação
//   confirmacao_pratica — pede pra abrir uma aba real e localizar algo,
//                        execução só declarada (não altera dados reais)
//   texto_livre       — resposta escrita livre, com pontos esperados
//                        mostrados depois (não é correção automática)
//
// Campos comuns a `multipla_escolha` / `verdadeiro_falso`:
//   feedbackCerto         — texto mostrado quando acerta
//   feedbackErrado        — texto padrão mostrado quando erra (opcional)
//   feedbackPorOpcao      — (só multipla_escolha) array paralelo a `opcoes`,
//                           feedback específico pra cada alternativa errada
// ═══════════════════════════════════════════════════════════════════════════
//
// v186 — TEXTOS REESCRITOS em linguagem simples (frases curtas, "tarefa" no lugar de "OT"),
// respostas escritas (texto_livre) trocadas por múltipla escolha ou ordenar, orientação sobre
// miniatura de resina (colecionável, não brinquedo) e redação de empenho revisada.
// Estrutura e gabaritos das questões originais preservados. Todas as trilhas subiram de versao
// (o progresso anterior fica guardado e o colaborador recomeça).

var TREINAMENTO_TRILHAS = {
  "integracao": {
    "id": "integracao",
    "nome": "Integração Valente",
    "descricao": "Formação comum de entrada: o fluxo do pedido, o Kanban e as perguntas que guiam o seu trabalho.",
    "icone": "🧭",
    "versao": 3,
    "cargosPermitidos": null,
    "competencias": [
      "Visão do processo",
      "Fluxo e Kanban",
      "Uso do Valente OS",
      "Informação completa",
      "Responsabilidade",
      "Qualidade e segurança"
    ],
    "criteriosConclusao": "Explicar o caminho de um pedido; identificar um problema e avisar; demonstrar consulta de tarefa em ambiente de treino; confirmar que entendeu a diferença entre colecionável de resina e brinquedo. A conclusão depende de conferência do responsável.",
    "dias": [
      {
        "dia": 1,
        "titulo": "Onde estou trabalhando",
        "subtitulo": "A Valente do começo ao fim",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Do pedido à entrega",
            "texto": "A Valente Artes é um estúdio de impressão 3D. O cliente pede uma peça. A Valente faz a peça e entrega. Entre o pedido e a entrega, a peça passa por várias pessoas. Cada pessoa cuida de uma parte. Mas todos têm a mesma meta: entregar o que foi prometido ao cliente. Mesmo que você faça só uma parte, precisa conhecer o caminho inteiro. Assim você entende por que a sua parte é importante."
          },
          {
            "tipo": "conteudo",
            "titulo": "Três tipos de trabalho",
            "texto": "A Valente faz três tipos de trabalho. Produto próprio: é uma peça que a Valente já tem na sua linha, pronta para produzir e vender. Produto personalizado: é feito para um cliente, do jeito que ele pediu. Exemplo: uma miniatura feita a partir de fotos. Serviço: a Valente faz só uma parte do trabalho para o cliente. Exemplo: só modelar, só imprimir, só dar acabamento ou só pintar. Cada tipo pode seguir um caminho diferente dentro da empresa."
          },
          {
            "tipo": "conteudo",
            "titulo": "A qualidade começa no início",
            "texto": "Muita gente acha que qualidade é conferir a peça no final. Não é só isso. A qualidade começa com a informação certa, desde a primeira conversa com o cliente. Veja um exemplo. O pedido é anotado com o tamanho errado. A modelagem, a impressão e a pintura trabalham com capricho. Mesmo assim, a peça sai errada. Todos fizeram bem feito, mas seguiram uma informação errada. Informação certa no começo poupa tempo e material. E mantém a confiança do cliente."
          },
          {
            "tipo": "conteudo",
            "titulo": "Como agir",
            "texto": "Antes de começar qualquer tarefa, faça duas perguntas. Primeira: o que a empresa prometeu entregar neste trabalho? Segunda: qual é a minha parte nisso? Não sabe responder? Não finja que sabe. Procure a informação no Valente OS ou na ficha do pedido. Se ainda tiver dúvida, pergunte ao responsável. Dizer que não sabe não é erro. Inventar é erro."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "visao_processo",
            "pergunta": "O pedido foi anotado com o tamanho errado da miniatura. A impressão e a pintura foram feitas com muito cuidado. O que deve acontecer?",
            "opcoes": [
              "A peça sai certa, porque o trabalho bem feito conserta a informação errada.",
              "A peça sai bem feita, mas diferente do que o cliente pediu.",
              "O erro aparece sozinho na impressão e dá tempo de corrigir.",
              "Só o setor de envio tem problema, porque é ele que fala com o cliente."
            ],
            "correta": 1,
            "feedbackCerto": "Isso mesmo. Todos trabalharam bem, mas com a informação errada. O erro só aparece no final.",
            "feedbackPorOpcao": [
              "Trabalho bem feito não conserta informação errada. A peça sai caprichada, mas errada.",
              null,
              "A máquina imprime o que recebe. Ela não sabe o que o cliente queria.",
              "O erro começou no início e passa por todas as etapas, não só pelo envio."
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "visao_processo",
            "afirmacao": "A qualidade da peça depende só da conferência feita no último setor, antes do envio.",
            "correta": false,
            "feedbackCerto": "Certo. A qualidade depende da informação certa desde o começo e do cuidado em cada etapa.",
            "feedbackErrado": "Não é assim. A conferência do final não conserta uma informação que entrou errada no começo."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "visao_processo",
            "pergunta": "Você recebeu uma tarefa. Você não sabe o que a empresa prometeu ao cliente nesse trabalho. O que você faz?",
            "opcoes": [
              "Faço do jeito mais comum, que quase sempre dá certo.",
              "Começo logo e pergunto depois, se aparecer algum problema.",
              "Procuro no Valente OS ou na ficha do pedido. Se a dúvida continuar, pergunto ao responsável."
            ],
            "correta": 2,
            "feedbackCerto": "Isso mesmo. Primeiro você procura a informação. Se não achar, pergunta ao responsável. Não saber não é erro.",
            "feedbackErrado": "Não é assim. Fazer sem saber é inventar. Procure no Valente OS ou na ficha do pedido. Se a dúvida continuar, pergunte ao responsável."
          }
        ]
      },
      {
        "dia": 2,
        "titulo": "Como um trabalho passa pela empresa",
        "subtitulo": "O caminho do pedido, etapa por etapa",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O caminho do pedido",
            "texto": "No Valente OS, o caminho de um pedido aparece em etapas. Tudo começa com o cliente, que traz o que precisa. Depois vêm as etapas: Negociação, Pago, Modelando, Imprimindo, Pós-impressão, Pintura, Preparar p/ envio e Enviado. Ver esse caminho na tela ajuda qualquer pessoa a saber onde o trabalho está e o que falta para ele chegar ao cliente."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que cada etapa quer dizer",
            "texto": "Negociação: o pedido está sendo combinado com o cliente. Pago: o pagamento foi confirmado e o trabalho pode seguir. Em pedido de instituição pública com empenho, o número do empenho precisa estar registrado antes de o trabalho começar. Empenho é o documento que reserva o dinheiro do pagamento. Modelando: o modelo 3D está sendo criado ou preparado. Imprimindo: a impressora está fazendo a peça. Pós-impressão: a peça é tratada depois de impressa, por exemplo com limpeza e retirada dos suportes. Pintura: a peça recebe a cor. Preparar p/ envio: conferir e embalar. Enviado: a peça saiu para o cliente."
          },
          {
            "tipo": "conteudo",
            "titulo": "Nem todo trabalho usa todas as etapas",
            "texto": "Uma miniatura feita a partir de fotos precisa ser modelada antes de imprimir. Já um arquivo STL pronto e aprovado pode pular essa etapa. STL é o arquivo do modelo 3D. Uma peça sem pintura não passa por Pintura. O importante é o sistema mostrar o que aconteceu de verdade. Mudar o pedido de etapa avisa a equipe que a situação mudou. Não é só fazer o cartão andar na tela."
          },
          {
            "tipo": "conteudo",
            "titulo": "As cinco perguntas",
            "texto": "Quando receber um trabalho, pergunte de qual etapa ele veio e qual é a próxima. Use também cinco perguntas durante o dia. O que estou recebendo? O que preciso saber antes de começar? O que é minha responsabilidade fazer? Como sei que fiz certo? O que a próxima pessoa precisa receber de mim? Você vai treinar uma de cada vez nas próximas aulas."
          },
          {
            "tipo": "ordenar",
            "competencia": "fluxo_kanban",
            "instrucao": "Coloque as etapas do Kanban, o quadro de pedidos, na ordem em que um pedido completo costuma andar.",
            "itens": [
              "Negociação",
              "Pago",
              "Modelando",
              "Imprimindo",
              "Pós-impressão",
              "Pintura",
              "Preparar p/ envio",
              "Enviado"
            ],
            "feedbackCerto": "Muito bem. Essa é a ordem completa. Lembre: nem todo pedido passa por todas as etapas.",
            "feedbackErrado": "Veja a ordem de novo. O pedido é combinado e pago. Depois é modelado, impresso, tratado, pintado e preparado. Só então é enviado."
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "fluxo_kanban",
            "pergunta": "Quais destes trabalhos podem pular a etapa Modelando?",
            "itens": [
              "Peça com arquivo STL pronto e já aprovado",
              "Miniatura que precisa ser criada a partir de fotos do cliente",
              "Nova impressão de um modelo que já existe e está aprovado",
              "Personagem que o cliente só descreveu por escrito"
            ],
            "corretos": [
              0,
              2
            ],
            "feedbackCerto": "Isso mesmo. Se o modelo já existe e está aprovado, não há o que modelar. Se o modelo ainda precisa ser criado, a etapa é necessária.",
            "feedbackErrado": "A etapa Modelando é necessária quando o modelo 3D ainda precisa ser criado. Se o arquivo já existe e está aprovado, o pedido pode pular essa etapa."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "fluxo_kanban",
            "local": "No computador ou no tablet Samsung, com o responsável",
            "instrucao": "Peça ao responsável para abrir a aba Pedidos com você. Só olhe. Leia o nome de cada coluna: Negociação, Pago, Modelando, Imprimindo, Pós-impressão, Pintura, Preparar p/ envio e Enviado. Não mova nenhum cartão. Depois escolha um cartão e diga de qual etapa ele veio e qual é a próxima."
          }
        ]
      },
      {
        "dia": 3,
        "titulo": "Conhecendo o Valente OS",
        "subtitulo": "Onde a equipe busca informação",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Para que serve o sistema",
            "texto": "O Valente OS guarda as informações da equipe. Assim ninguém depende só da memória, de mensagens soltas ou de perguntas no corredor. As abas principais são: Pedidos, que mostra o Kanban, o quadro de pedidos. Peças Próprias. Caixa. Orçamento, que é a calculadora de custo. Propostas, onde se monta o orçamento para o cliente. Estoque. Tarefas, que mostra no computador as tarefas passadas para você. E o Centro de Capacitação, onde você faz este curso. No tablet, as suas tarefas ficam em Minhas funções. Cada cargo vê só as abas liberadas para a sua função. Por isso é normal você não ver todas."
          },
          {
            "tipo": "conteudo",
            "titulo": "Onde as peças ficam guardadas",
            "texto": "A aba Estoque mostra onde cada peça está guardada. O lugar tem um endereço com galpão, estante, prateleira e, às vezes, caixa. Exemplo: G1-E01-P02-C03. Nessa aba você pode guardar peças, ver o que há em cada lugar e fazer a retirada guiada. A retirada guiada diz em qual endereço pegar cada componente. Atenção: o estoque diz onde a peça está. A contagem de produção diz quantas peças existem. Uma não substitui a outra."
          },
          {
            "tipo": "conteudo",
            "titulo": "Consulte antes de supor",
            "texto": "Regra de ouro: olhe no sistema antes de supor uma informação. Quer saber como está um pedido? Abra a aba certa antes de interromper outro setor. Só pergunte a uma pessoa se a informação não estiver no sistema, se as informações não baterem ou se a decisão não for sua. Assim você poupa o tempo de todos e não decide com base em palpite."
          },
          {
            "tipo": "conteudo",
            "titulo": "Treinamento não muda dados",
            "texto": "No treinamento, o sistema é ferramenta de trabalho, não enfeite. Por isso, as práticas aqui são só para consultar e observar. Não mude dados reais, não mova cartões e não conclua tarefas de verdade. Só faça isso em prática acompanhada e autorizada pelo responsável. Abriu algo por engano? Saia sem salvar e avise o responsável."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "uso_valente_os",
            "cliente": "Colega da pós-impressão: 'Você sabe em que etapa está o pedido da Marina? Preciso saber se já posso separar espaço para a peça.'",
            "opcoes": [
              {
                "label": "Respondo que acho que está em Pintura, mas não tenho certeza.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Palpite não é informação. Ele pode levar o colega a decidir errado. É melhor dizer que não sabe do que supor."
              },
              {
                "label": "Abro a aba Pedidos, procuro o cartão da Marina e digo a etapa que aparece.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Isso. O sistema é o primeiro lugar para olhar. Você responde com uma informação conferida."
              },
              {
                "label": "Peço para ele perguntar ao líder, que deve saber.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Você tem acesso à informação. Interromper o líder sem olhar antes dá trabalho sem necessidade."
              },
              {
                "label": "Digo que pedidos assim sempre estão em Imprimindo.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Dizer que é sempre assim é inventar. Cada pedido anda do seu jeito."
              }
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "uso_valente_os",
            "afirmacao": "Se a informação do sistema estiver faltando ou não bater, o certo é perguntar ao responsável, e não escolher a versão que parece mais provável.",
            "correta": true,
            "feedbackCerto": "Certo. Quando o sistema não resolve, pergunte ao responsável. Escolher a versão mais provável é supor.",
            "feedbackErrado": "Quando as informações não batem, escolher uma delas por palpite é supor. O certo é perguntar ao responsável."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "uso_valente_os",
            "local": "Valente OS > todas as abas liberadas no seu usuário",
            "instrucao": "Passe pelas abas que aparecem para você. Leia o nome de cada uma, abra e veja que tipo de informação ela mostra. Não mude, não salve e não mova nada. Se faltar uma aba que você esperava, anote e pergunte ao responsável depois. Ela pode não estar liberada para a sua função."
          }
        ]
      },
      {
        "dia": 4,
        "titulo": "O que é Kanban",
        "subtitulo": "Cartões, colunas e o peso de mover",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Kanban em três ideias",
            "texto": "Kanban é um jeito de acompanhar o trabalho olhando um quadro. A palavra vem do japonês e lembra um cartão de aviso. Ele tem três ideias simples. Um cartão é um trabalho ou pedido. Uma coluna é uma situação, ou etapa. Mover o cartão de uma coluna para outra avisa que a situação mudou. No Valente OS, a aba Pedidos funciona assim."
          },
          {
            "tipo": "conteudo",
            "titulo": "Mover é avisar",
            "texto": "Mover um cartão não é arrumar a tela. É dar uma notícia para toda a equipe. Se o cartão está em Imprimindo, todos entendem que a peça está nessa etapa. Se alguém move para Pintura antes de a peça ser liberada, o sistema passa a dizer uma coisa falsa. Isso pode gerar uma promessa errada ao cliente. E pode fazer outra pessoa esperar uma peça que ainda não está pronta."
          },
          {
            "tipo": "conteudo",
            "titulo": "Como agir",
            "texto": "Antes de mover um cartão, veja qual fato real permite essa mudança. A peça terminou de imprimir? Foi conferida? O pagamento foi confirmado? Primeiro o fato acontece, depois você move. Nunca mova só para parecer que o trabalho está andando. Quem pode mover cada etapa, e em que condição, segue o procedimento da Valente. Se tiver dúvida, pergunte ao responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "O cartão hoje no Valente OS",
            "texto": "Cada cartão mostra a etapa atual da produção, como modelagem, impressão ou pintura. A tela se atualiza sozinha a cada 60 segundos. Pedido novo aparece como Aguardando liberação. No cartão há o botão Liberar. Ele cria a ordem de produção, o plano e as tarefas. Se faltar pagamento ou empenho, o botão avisa o que falta. Empenho é o documento que reserva o dinheiro do pagamento. Com empenho pendente, não dá para mover o cartão para uma etapa de produção. O empenho precisa estar registrado primeiro."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "fluxo_kanban",
            "pergunta": "Você terminou de limpar uma peça, mas ainda não conferiu se ficou boa. O cartão está em Pós-impressão. O que é mais certo fazer?",
            "opcoes": [
              "Mover para Pintura agora e conferir enquanto a pessoa da pintura pega a peça",
              "Mover para Pintura e avisar depois, se achar algum problema",
              "Conferir primeiro e só mover o cartão se a peça estiver liberada",
              "Deixar o cartão onde está até alguém pedir a peça"
            ],
            "correta": 2,
            "feedbackCerto": "Isso. O fato que permite mover é a peça estar conferida e liberada. Só terminar a limpeza não basta.",
            "feedbackPorOpcao": [
              "Isso empurra o problema para a próxima etapa. E o quadro mostra uma situação que ainda não é verdade.",
              "Avisar depois não apaga a informação falsa que já apareceu no Kanban.",
              null,
              "Esperar alguém cobrar deixa o quadro atrasado. O cartão deve mostrar a situação real."
            ],
            "erroCriticoOpcoes": [
              0,
              1
            ]
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "fluxo_kanban",
            "pergunta": "Em quais destas situações é certo mover um cartão para a próxima coluna?",
            "itens": [
              "A impressão terminou e a peça foi conferida e liberada",
              "Estou com pressa e quero mostrar avanço ao líder",
              "O cliente perguntou e quero parecer adiantado",
              "O fato real que marca o fim da etapa aconteceu"
            ],
            "corretos": [
              0,
              3
            ],
            "feedbackCerto": "Isso mesmo. Só um fato real permite mudar o cartão de coluna.",
            "feedbackErrado": "Pressa e aparência não são fatos. Mova o cartão só quando o fato real que encerra a etapa tiver acontecido."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "fluxo_kanban",
            "local": "No computador ou no tablet Samsung, com o responsável",
            "instrucao": "Peça ao responsável para abrir a aba Pedidos com você e escolham um cartão. Só olhe. Veja qual etapa da produção aparece nele, como modelagem, impressão ou pintura. Pense: o que precisa acontecer de verdade para ele ir para a próxima coluna? Não arraste nem mude o cartão. Se tiver dúvida sobre quem pode mover, pergunte ao responsável."
          }
        ]
      },
      {
        "dia": 5,
        "titulo": "Informação também faz parte do produto",
        "subtitulo": "O que preciso saber antes de começar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Tarefa incompleta, peça errada",
            "texto": "Uma tarefa incompleta pode gerar uma peça errada, mesmo com todos trabalhando bem. Conforme o trabalho, você precisa de informações como: cliente, produto, quantidade, tamanho, arquivo ou referência, acabamento, observações e prazo. Os campos do Valente OS são a referência oficial. Esta é a segunda das cinco perguntas: o que preciso saber antes de começar?"
          },
          {
            "tipo": "conteudo",
            "titulo": "Um exemplo",
            "texto": "Uma tarefa diz só 'fazer a miniatura do João'. Ela não diz qual modelo, qual tamanho, quantas unidades nem qual versão. Quem recebe vai ter que adivinhar. Adivinhar errado custa material, tempo de máquina e trabalho refeito. Agora pense em uma tarefa com todos os dados necessários. O próximo setor consegue trabalhar sem perguntar e sem supor."
          },
          {
            "tipo": "conteudo",
            "titulo": "Como agir",
            "texto": "Ao receber uma tarefa, compare o que você recebeu com o que precisa para fazer o trabalho. Falta um dado importante? Pare e procure na fonte: o pedido no Valente OS, a ficha ou a tarefa. Se não achar, fale com o responsável. Não complete o que falta com palpite. Dizer 'não sei, vou conferir' não é erro. Inventar é erro."
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "informacao_completa",
            "pergunta": "Você recebeu a tarefa: 'Imprimir miniaturas do dragão para a Carla.' Quais informações ainda precisam estar claras antes de começar?",
            "itens": [
              "Tamanho da miniatura",
              "Quantidade de unidades",
              "Qual arquivo ou versão do modelo usar",
              "O sobrenome da Carla"
            ],
            "corretos": [
              0,
              1,
              2
            ],
            "feedbackCerto": "Isso mesmo. Sem tamanho, quantidade e arquivo não dá para fazer o trabalho. O sobrenome da cliente não muda o trabalho.",
            "feedbackErrado": "Faltam dados que mudam a peça: tamanho, quantidade e arquivo ou versão. Dado que não muda o trabalho não impede você de começar."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "informacao_completa",
            "pergunta": "Na tarefa de uma peça, o campo de quantidade está em branco. O que você faz?",
            "opcoes": [
              "Imprimo uma unidade, que é o mais comum",
              "Procuro a informação no pedido do Valente OS e, se não achar, pergunto ao responsável",
              "Pergunto a um colega que deve lembrar",
              "Imprimo várias para não faltar e guardo o que sobrar"
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Primeiro a fonte oficial, depois o responsável. Nada de adivinhar.",
            "feedbackPorOpcao": [
              "O 'mais comum' é um palpite. Pode faltar peça ou sobrar material gasto à toa.",
              null,
              "A memória do colega não é fonte segura. Olhe o sistema primeiro.",
              "Imprimir a mais gasta material e tempo sem autorização."
            ],
            "erroCriticoOpcoes": [
              0,
              3
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "informacao_completa",
            "pergunta": "Você recebeu a tarefa: 'Fazer a miniatura do João.' Ela não diz modelo, tamanho, quantidade nem versão. O que você faz antes de começar?",
            "opcoes": [
              "Uso o modelo e o tamanho mais pedidos e começo",
              "Começo o trabalho e acerto os dados depois, se alguém reclamar",
              "Pergunto a um colega e sigo o que ele lembrar",
              "Procuro os dados no pedido do Valente OS ou na ficha e, se não achar, pergunto ao responsável"
            ],
            "correta": 3,
            "feedbackCerto": "Isso mesmo. Você viu o que faltava, procurou na fonte e não começou com palpite.",
            "feedbackErrado": "Não comece com palpite. Veja o que falta. Procure no pedido do Valente OS ou na ficha. Se não achar, pergunte ao responsável."
          }
        ]
      },
      {
        "dia": 6,
        "titulo": "Minha responsabilidade começa antes de fazer",
        "subtitulo": "Identificar, conferir, executar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Conferir antes de agir",
            "texto": "Fazer bem feito começa por conferir. Antes de ligar uma máquina, pintar, modelar, embalar ou responder algo sobre o trabalho, veja três coisas. Você sabe exatamente o que deve fazer? Você tem a referência certa? Você tem autorização para decidir? Esta é a terceira das cinco perguntas: o que é minha responsabilidade fazer?"
          },
          {
            "tipo": "conteudo",
            "titulo": "Parecido não é igual",
            "texto": "Dois arquivos com nomes quase iguais podem ser versões diferentes do modelo. Duas peças parecidas podem ser de pedidos diferentes. Usar o arquivo errado ou a peça errada é um erro sério. Ele só aparece depois que o trabalho já foi feito. Pressa não transforma dúvida em certeza."
          },
          {
            "tipo": "conteudo",
            "titulo": "A sequência",
            "texto": "Siga a ordem IDENTIFICAR, CONFERIR, EXECUTAR. Identificar: qual é o pedido, a peça e a tarefa. Conferir: o arquivo, a referência, a quantidade e as instruções batem com o que foi pedido? Executar: só então comece. Se algo não bater, use CONSULTAR RESPONSÁVEL. Na dúvida, perguntar vem antes de executar."
          },
          {
            "tipo": "ordenar",
            "competencia": "responsabilidade",
            "instrucao": "Coloque na ordem certa os passos para fazer uma tarefa com responsabilidade.",
            "itens": [
              "Identificar o pedido e a tarefa",
              "Conferir arquivo, referência e instruções",
              "Executar a tarefa",
              "Seguir para a conferência do resultado"
            ],
            "feedbackCerto": "Isso. Primeiro saber o que é, depois conferir, depois fazer.",
            "feedbackErrado": "Lembre a ordem: IDENTIFICAR, CONFERIR e só então EXECUTAR."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "responsabilidade",
            "pergunta": "Na pasta há dois arquivos: 'dragao_v2.stl' e 'dragao_v2_final.stl'. A tarefa só diz 'imprimir o dragão'. Qual é o melhor passo?",
            "opcoes": [
              "Usar o mais novo, porque 'final' deve ser o certo",
              "Imprimir os dois, para ter certeza de que um deles serve",
              "Conferir no pedido ou na tarefa qual versão vale e, se não estiver claro, perguntar ao responsável",
              "Usar o que tem o nome mais curto"
            ],
            "correta": 2,
            "feedbackCerto": "Certo. O pedido diz qual arquivo usar. Nome parecido não prova qual é a versão.",
            "feedbackPorOpcao": [
              "'Final' no nome não prova que é a versão aprovada.",
              "Imprimir os dois gasta material e tempo. E a dúvida sobre qual enviar continua.",
              null,
              "O tamanho do nome não tem nada a ver com a versão certa."
            ],
            "erroCriticoOpcoes": [
              0,
              1,
              3
            ]
          },
          {
            "tipo": "conteudo",
            "titulo": "A caixa SUA MISSÃO",
            "texto": "No alto da tarefa aparece a caixa SUA MISSÃO. Ela diz o que você deve fazer. Exemplo: Pintar 8 de 18 unidades de Saia. Se a tarefa já andou, a caixa mostra o que falta e uma linha como Já feitas nesta tarefa: 10. Ela também diz quantas unidades faltam para fechar o pedido e quantas peças impressas estão disponíveis. Leia essa caixa antes de começar. Nas tarefas de pintura, separação, montagem, conferência, embalagem e expedição, o botão Retirar do estoque mostra onde pegar a peça. O PIN, seu código pessoal, mostra quem faz a tarefa. Seu nome aparece no alto e fica gravado como responsável pelo que você inicia e conclui."
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "responsabilidade",
            "afirmacao": "Se um colega está sem o PIN dele por perto, você pode iniciar e concluir tarefas com o PIN dele, porque o resultado do trabalho é o mesmo.",
            "correta": false,
            "feedbackCerto": "Certo. O PIN mostra quem fez e grava o responsável. Usar o PIN de outra pessoa registra uma informação falsa.",
            "feedbackErrado": "O nome gravado como responsável vem do PIN. Usar o PIN de outra pessoa grava o nome de quem não fez o trabalho. A regra é registrar só o que aconteceu de verdade."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "responsabilidade",
            "local": "Valente OS > aba Tarefas (no computador) ou Minhas funções (no tablet)",
            "instrucao": "Abra uma tarefa só para ler. Veja a caixa SUA MISSÃO no alto, o título, as instruções, a lista de conferência, as fotos de referência e a quantidade. Pergunte a si mesmo: eu saberia exatamente o que fazer? Tenho a referência certa? Não toque em Iniciar tarefa nem em Concluir tarefa. Se não houver tarefa para você, olhe a tela e anote o que espera encontrar nela."
          }
        ]
      },
      {
        "dia": 7,
        "titulo": "Minha responsabilidade termina depois de fazer",
        "subtitulo": "Executar, conferir, registrar, entregar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Terminar não é acabar",
            "texto": "Terminar o trabalho com as mãos não encerra a sua responsabilidade. Ainda falta conferir o resultado, organizar o material, registrar o que for preciso, identificar a peça e entregar para a próxima etapa pronta para uso. Aqui entram as duas últimas das cinco perguntas: como sei que fiz certo? E o que a próxima pessoa precisa receber de mim?"
          },
          {
            "tipo": "conteudo",
            "titulo": "Exemplos do dia a dia",
            "texto": "A impressão terminou na máquina. Mesmo assim, a peça precisa ser conferida antes de ser liberada. A pintura secou. Mesmo assim, ela precisa ser comparada com a referência e com o pedido. Se você entrega sem conferir, a próxima pessoa recebe um problema. Ela talvez só descubra tarde, depois de gastar tempo com a peça."
          },
          {
            "tipo": "conteudo",
            "titulo": "A sequência",
            "texto": "Siga a ordem EXECUTAR, CONFERIR, REGISTRAR, ENTREGAR. Conferir: o resultado bate com o pedido? Registrar: marque no Valente OS o que for preciso, como concluir a tarefa ou preencher a lista de conferência. Entregar: a peça vai identificada, organizada e com os avisos que a próxima pessoa precisa saber. Só registre como feito o que foi feito de verdade."
          },
          {
            "tipo": "conteudo",
            "titulo": "Cada tarefa fecha do seu jeito",
            "texto": "Ao concluir, cada tipo de tarefa abre a sua janela. Na impressão, você responde Tudo certo, Saiu só parte, Falhou ou Cancelada. Em etapas como lavagem, cura, montagem e separação, a janela Concluir etapa pergunta quantas ficaram prontas e quantas precisam voltar para a fase anterior, com o motivo. Ela também mostra a próxima etapa. Na pintura de várias peças, a Produção do dia registra quantas foram pintadas e quantas estragaram. Em Conferência e Embalagem, Encontrei problema pede o motivo e não deixa o pedido seguir. Na expedição, o caminho é Marcar como enviado, com forma de envio, código de rastreio e saldo quitado ou combinado."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "responsabilidade",
            "pergunta": "Você embalou o pedido e vai fechar a tarefa de expedição. Qual é o caminho certo no sistema?",
            "opcoes": [
              "Marcar como enviado, informando a forma de envio, o código de rastreio e se o saldo está quitado ou combinado",
              "Concluir a tarefa de expedição e avisar o cliente por mensagem, sem registrar o rastreio",
              "Deixar a tarefa aberta até o cliente confirmar que recebeu",
              "Mover o cartão para Enviado e deixar a tarefa de expedição para outra pessoa fechar"
            ],
            "correta": 0,
            "feedbackCerto": "Isso. Marcar como enviado registra o envio com os dados que a próxima pessoa e o cliente vão precisar.",
            "feedbackPorOpcao": [
              null,
              "Concluir a expedição sem Marcar como enviado não é o caminho. O envio fica sem registro de rastreio e de saldo.",
              "A confirmação de que o cliente recebeu vem depois. A expedição fecha quando você registra o envio.",
              "Quem fez o trabalho registra o que fez. O envio é registrado na janela da tarefa."
            ],
            "erroCriticoOpcoes": [
              1
            ]
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "responsabilidade",
            "cliente": "Colega da próxima etapa: 'A peça já está comigo, mas está sem identificação. E a tarefa ainda aparece como em andamento. Você terminou?'",
            "opcoes": [
              {
                "label": "Já terminei. Esqueci de registrar, mas pode seguir que depois eu marco.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Entregar sem registrar deixa o sistema dizendo uma coisa diferente do que aconteceu."
              },
              {
                "label": "Vou conferir a peça, identificar, concluir a tarefa no sistema e avisar você se houver alguma observação.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Isso. Conferir, registrar e entregar a peça identificada é o que fecha a sua responsabilidade."
              },
              {
                "label": "Marco a tarefa como concluída agora e confiro a peça depois, quando der.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Marcar como feito sem conferir é registrar uma coisa que não aconteceu."
              },
              {
                "label": "Pode seguir sem identificação, porque dá para reconhecer a peça.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Peças parecidas se confundem. Identificar faz parte da entrega."
              }
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "responsabilidade",
            "afirmacao": "Uma impressão que terminou na máquina já pode ser liberada para a próxima etapa sem conferência.",
            "correta": false,
            "feedbackCerto": "Certo. Terminar na máquina não prova que a peça está boa. É preciso conferir antes.",
            "feedbackErrado": "A peça pode ter falhas que só aparecem na conferência. Liberar sem conferir passa o problema adiante."
          },
          {
            "tipo": "ordenar",
            "competencia": "responsabilidade",
            "instrucao": "Coloque na ordem certa: o que você faz para fechar a sua parte do trabalho.",
            "itens": [
              "Executar a sua parte do trabalho",
              "Conferir se o resultado bate com o pedido",
              "Registrar no Valente OS o que foi feito",
              "Entregar a peça identificada para a próxima pessoa"
            ],
            "feedbackCerto": "Isso mesmo. EXECUTAR, CONFERIR, REGISTRAR e ENTREGAR. Assim a próxima pessoa recebe a peça pronta para uso.",
            "feedbackErrado": "Lembre a ordem: EXECUTAR, CONFERIR, REGISTRAR, ENTREGAR. Você só registra e entrega depois de conferir."
          }
        ]
      },
      {
        "dia": 8,
        "titulo": "Erro, dúvida e segurança",
        "subtitulo": "Posso fazer, preciso perguntar ou preciso parar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Três tipos de decisão",
            "texto": "Nem toda decisão é igual. Algumas ações são de rotina e autorizadas. Essas você pode fazer. Outras pedem consulta ao sistema ou ao responsável. Em situação de risco, é preciso parar. Pense em qual tipo é antes de agir. Assim você não fica travado e também não improvisa. O que cada função pode decidir sozinha segue o procedimento da Valente ou o responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "Onde levar cada dúvida",
            "texto": "A dúvida é só onde achar uma informação? Consulte o sistema. A dúvida é sobre autorização, regra que não está escrita, risco, equipamento funcionando de jeito estranho ou condição de venda não definida? Consulte o responsável. Você não precisa saber tudo. A regra da casa é: não saber não é erro. Inventar é erro."
          },
          {
            "tipo": "conteudo",
            "titulo": "Peça de coleção não é brinquedo",
            "texto": "As miniaturas de resina da Valente são peças de coleção. Elas podem quebrar e ter partes pequenas. A linha atual não foi aprovada como brinquedo. Se alguém disser que uma criança vai brincar com a peça, avise o responsável. Não trate a peça como brinquedo seguro."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "seguranca_produto",
            "pergunta": "Uma pessoa pede uma miniatura de resina para uma criança brincar. Qual é a atitude certa?",
            "opcoes": [
              "Explicar que a linha atual é de coleção, não serve para esse uso, e avisar o responsável.",
              "Prometer que a resina não quebra.",
              "Entregar sem perguntar para que a peça vai ser usada."
            ],
            "correta": 0,
            "feedbackCerto": "Certo. A segurança vem antes da venda.",
            "feedbackErrado": "Volte ao texto sobre o uso da peça. Antes de vender, saiba para que ela vai ser usada. As miniaturas de resina da linha atual não são brinquedos."
          },
          {
            "tipo": "conteudo",
            "titulo": "Segurança vem primeiro",
            "texto": "Nunca deixe a segurança de lado para ganhar tempo. Regras gerais na impressão 3D: resina líquida pede luvas, proteção para os olhos e boa ventilação. Solventes, tintas e lixamento pedem ventilação e proteção certa para a respiração. Ferramentas de corte pedem atenção e proteção das mãos. Se algo parecer perigoso ou estranho, pare. Os EPI, que são os equipamentos de proteção, e os procedimentos oficiais da Valente valem mais que qualquer regra geral."
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "seguranca_qualidade",
            "pergunta": "Em quais destas situações você deve PARAR ou consultar o responsável, e não decidir sozinho?",
            "itens": [
              "Descobrir em qual aba aparece a situação de um pedido",
              "Impressora fazendo um barulho diferente do normal e com cheiro de queimado",
              "Cliente pedindo um desconto que ninguém definiu",
              "Dúvida sobre qual cartão é do pedido da Marina, que já aparece na tela"
            ],
            "corretos": [
              1,
              2
            ],
            "feedbackCerto": "Isso mesmo. Equipamento funcionando de jeito estranho e condição de venda não definida pedem parar ou consultar. Achar uma informação no sistema é consulta de rotina.",
            "feedbackErrado": "Dúvida sobre onde achar uma informação se resolve no sistema. Equipamento estranho e condição de venda não definida pedem parar ou consultar o responsável."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "seguranca_qualidade",
            "cliente": "Colega: 'Estou com pressa. Vou lavar essa peça de resina sem luva, é rapidinho. Você vigia a porta?'",
            "opcoes": [
              {
                "label": "Vigio, mas só desta vez.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Deixar a segurança de lado para ganhar tempo é um erro grave. Resina na pele pode causar irritação."
              },
              {
                "label": "Lembro que precisa de luva e ventilação, e ofereço ajuda para pegar o EPI.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Isso. Segurança não se negocia. E você ajuda sem cobrar nem fazer piada."
              },
              {
                "label": "Não é problema meu, cada um cuida de si.",
                "correta": false,
                "erroCritico": false,
                "feedback": "A segurança é responsabilidade de todos. Avisar é a atitude certa."
              },
              {
                "label": "Digo que, se for rápido mesmo, tudo bem.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Ser rápido não tira o risco. Tocar na resina é perigoso, mesmo por pouco tempo."
              }
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "seguranca_qualidade",
            "local": "Área física de trabalho (bancada, impressoras, pós-impressão e pintura)",
            "instrucao": "Olhe a sua área de trabalho. Ache onde ficam os EPI, como luvas e proteção para os olhos. Ache também as saídas de ventilação e de emergência. Se não souber onde está algo, pergunte ao responsável. Nesta prática, não mexa em resina, solventes ou tintas. Só encontre os lugares."
          }
        ]
      },
      {
        "dia": 9,
        "titulo": "Qualidade é responsabilidade de todos",
        "subtitulo": "Não deixe um defeito seguir adiante",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Todo mundo cuida da qualidade",
            "texto": "A qualidade não é só do último setor. Quem acha um defeito deve impedir que ele siga adiante sem ser tratado. Continuar um trabalho que você sabe que está errado faz um problema pequeno virar um conserto grande e caro. O defeito só sai barato quando é achado cedo."
          },
          {
            "tipo": "conteudo",
            "titulo": "Dois exemplos",
            "texto": "O acabamento recebe uma peça quebrada. Ele não deve só preparar a peça e mandar para a pintura. A pintura percebe um defeito na estrutura da peça. Ela não deve esconder o defeito com tinta. Esconder dá a impressão de problema resolvido. Mas o cliente recebe uma peça ruim. E a empresa perde a chance de corrigir a causa."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que fazer ao achar um problema",
            "texto": "Siga a ordem: IDENTIFICAR, SEPARAR, REGISTRAR ou COMUNICAR, DECIDIR COM AUTORIZAÇÃO, e só DEPOIS AVANÇAR. Separe a peça para ela não seguir por engano. Conte o que viu, de forma clara e sem culpar ninguém. A decisão de refazer, consertar ou aceitar a peça segue o procedimento da Valente ou a orientação do responsável."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "seguranca_qualidade",
            "pergunta": "Na pintura, você vê uma trinca na base de uma peça. A tinta cobriria bem. Qual é a atitude certa?",
            "opcoes": [
              "Pintar normalmente, porque a trinca fica escondida e o cliente não vai ver",
              "Pintar e avisar só se o cliente reclamar",
              "Consertar a trinca sozinho com o que tiver à mão e seguir",
              "Separar a peça, registrar ou comunicar o defeito e esperar a decisão do responsável"
            ],
            "correta": 3,
            "feedbackCerto": "Certo. Defeito na estrutura não se esconde. Separar e comunicar permite a decisão certa.",
            "feedbackPorOpcao": [
              "Esconder defeito é um erro grave. A trinca continua lá e a peça pode quebrar com o uso.",
              "Esperar a reclamação passa o problema para o cliente.",
              "Conserto improvisado e sem autorização pode piorar a peça. Essa decisão não é sua.",
              null
            ],
            "erroCriticoOpcoes": [
              0,
              1
            ]
          },
          {
            "tipo": "cenario",
            "competencia": "seguranca_qualidade",
            "titulo": "Peça com defeito no acabamento",
            "noInicial": "a",
            "nos": {
              "a": {
                "cliente": "Você está na pós-impressão e recebe uma peça com um braço partido. O cartão está nessa etapa. A pessoa da pintura já perguntou se a peça está liberada.",
                "opcoes": [
                  {
                    "label": "Colo o braço depressa e mando para a pintura sem falar nada.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Avançar sem avisar esconde o defeito. A pessoa da pintura recebe uma peça com problema sem saber.",
                    "proximo": "b"
                  },
                  {
                    "label": "Separo a peça para ela não seguir adiante e anoto o que vi.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Isso. Separar e registrar é o primeiro passo.",
                    "proximo": "b"
                  },
                  {
                    "label": "Mando para a pintura e peço que ela decida o que fazer.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Isso empurra o problema para outro setor. Ele deve ser tratado onde foi achado.",
                    "proximo": "b"
                  },
                  {
                    "label": "Deixo a peça no meio das outras, para ninguém se preocupar.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Misturar a peça com defeito com as boas pode fazer ela seguir por engano.",
                    "proximo": "b"
                  }
                ]
              },
              "b": {
                "cliente": "A peça está separada. Agora você precisa avisar o responsável. Como você avisa?",
                "opcoes": [
                  {
                    "label": "Digo só que a peça veio com problema.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Falta informação. Sem saber qual é o defeito, o responsável não consegue decidir.",
                    "proximo": "c"
                  },
                  {
                    "label": "Conto qual é o defeito, o pedido e a etapa de onde a peça veio, sem culpar ninguém.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Informação clara permite uma decisão rápida.",
                    "proximo": "c"
                  },
                  {
                    "label": "Culpo a impressão e explico como o erro devia ter sido evitado.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Apontar culpa não ajuda a decidir. O que importa é o fato e o pedido.",
                    "proximo": "c"
                  },
                  {
                    "label": "Espero alguém perguntar sobre a peça.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Esperar deixa o pedido parado e o cartão atrasado.",
                    "proximo": "c"
                  }
                ]
              },
              "c": {
                "cliente": "O responsável ainda não respondeu. A pessoa da pintura pergunta se pode começar essa peça.",
                "opcoes": [
                  {
                    "label": "Digo que pode começar, para ganhar tempo.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Avançar um trabalho com defeito sem decisão é um erro grave."
                  },
                  {
                    "label": "Digo que a peça está separada, esperando a decisão do responsável, e que ainda não deve ser pintada.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Isso. A peça só avança depois da decisão com autorização."
                  },
                  {
                    "label": "Passo a peça sem conversar, achando que ela decide sozinha.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Sem informação, a peça pode seguir por engano."
                  },
                  {
                    "label": "Digo que a peça vai ser jogada fora, que é o mais provável.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Você não sabe qual vai ser a decisão. Inventar o final é erro."
                  }
                ]
              }
            }
          },
          {
            "tipo": "ordenar",
            "competencia": "seguranca_qualidade",
            "instrucao": "Coloque na ordem certa: o que fazer quando você acha uma peça com defeito, como uma peça quebrada ou com falha de impressão.",
            "itens": [
              "Identificar o defeito na peça",
              "Separar a peça para ela não seguir por engano",
              "Registrar ou comunicar ao responsável o que viu",
              "Esperar a decisão do responsável",
              "Só depois avançar com o trabalho"
            ],
            "feedbackCerto": "Isso mesmo. Identificar, separar, registrar ou comunicar, esperar a decisão e só depois avançar.",
            "feedbackErrado": "Lembre a ordem: IDENTIFICAR, SEPARAR, REGISTRAR ou COMUNICAR, DECIDIR COM AUTORIZAÇÃO e só DEPOIS AVANÇAR."
          }
        ]
      },
      {
        "dia": 10,
        "titulo": "A viagem de um pedido",
        "subtitulo": "Missão final da Integração",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Tudo ligado",
            "texto": "Um pedido começa com o que o cliente precisa. Ele recebe informações e passa pelas etapas necessárias. Ele termina quando o combinado é entregue e registrado do jeito certo. Cada setor recebe algo e deve melhorar o trabalho sem perder informação. Nada disso funciona se uma pessoa só faz a sua parte e não confere."
          },
          {
            "tipo": "conteudo",
            "titulo": "Uma viagem de exemplo",
            "texto": "Acompanhe. O cliente pede uma peça personalizada. O Comercial entende e registra o pedido. A Modelagem prepara o modelo, quando é preciso. A Impressão faz a peça. A Pós-impressão trata a peça. A Pintura finaliza, quando o pedido tem pintura. A expedição confere e prepara o envio. O envio é registrado. Em cada passo, uma pessoa recebe de outra e entrega para a próxima."
          },
          {
            "tipo": "conteudo",
            "titulo": "As cinco perguntas, em cada etapa",
            "texto": "Em qualquer etapa, repita as cinco perguntas. O que estou recebendo? O que preciso saber antes de começar? O que é minha responsabilidade fazer? Como sei que fiz certo? O que a próxima pessoa precisa receber de mim? Se você sabe responder às cinco, está pronto para trabalhar com segurança. Se não sabe, consulte a fonte ou o responsável antes de avançar."
          },
          {
            "tipo": "cenario",
            "competencia": "visao_processo",
            "titulo": "A viagem do pedido da Bia",
            "noInicial": "a",
            "nos": {
              "a": {
                "cliente": "Pedido de exemplo: a Bia pediu uma miniatura personalizada do cachorro dela, a partir de fotos. Falta definir o tamanho e a quantidade. O cartão está em Negociação. O que você faz?",
                "opcoes": [
                  {
                    "label": "Escolho um tamanho comum e deixo anotado para adiantar.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Escolher o tamanho sem confirmar é inventar. O pedido fica errado desde o começo.",
                    "proximo": "b"
                  },
                  {
                    "label": "Confirmo o tamanho e a quantidade com a cliente e registro no pedido.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Isso. Informação certa no começo evita refazer o trabalho depois.",
                    "proximo": "b"
                  },
                  {
                    "label": "Movo o cartão para Pago para adiantar o trabalho.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Só se move o cartão depois do fato real. O pagamento não foi confirmado.",
                    "proximo": "b"
                  },
                  {
                    "label": "Deixo para quem for modelar perguntar depois.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Isso empurra o problema. A próxima etapa vai trabalhar sem informação.",
                    "proximo": "b"
                  }
                ]
              },
              "b": {
                "cliente": "Na Pós-impressão, a peça chega com marcas de suporte e uma pequena trinca em um ponto fino. O pedido segue para a pintura amanhã. O que você faz?",
                "opcoes": [
                  {
                    "label": "Passo tinta grossa por cima para esconder a trinca.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Esconder defeito na estrutura da peça é um erro grave.",
                    "proximo": "c"
                  },
                  {
                    "label": "Separo a peça, registro o que vi e aviso o responsável antes de avançar.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Identificar, separar, comunicar e só avançar com autorização.",
                    "proximo": "c"
                  },
                  {
                    "label": "Mando direto para a pintura e deixo a pessoa de lá avaliar.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Isso passa o defeito para a próxima etapa sem tratar.",
                    "proximo": "c"
                  },
                  {
                    "label": "Jogo a peça fora sem avisar e peço outra.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Você não tem autorização para decidir isso. E o problema fica sem registro.",
                    "proximo": "c"
                  }
                ]
              },
              "c": {
                "cliente": "A peça foi resolvida e pintada. Na etapa Preparar p/ envio, você confere e vai embalar. O que você faz antes de marcar como enviado?",
                "opcoes": [
                  {
                    "label": "Embalo e marco como enviado, porque a peça parece certa.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Parecer certa não é o mesmo que conferir com o pedido."
                  },
                  {
                    "label": "Confiro a peça com o pedido, embalo identificada e só uso Marcar como enviado, com o rastreio, quando ela for enviada de verdade.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Isso. O cartão acompanha o fato real, e a entrega sai conferida."
                  },
                  {
                    "label": "Marco como enviado agora para o cliente ver que já está a caminho.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Dizer que foi enviado sem ter sido é dar uma informação falsa."
                  },
                  {
                    "label": "Envio sem conferir, porque as etapas anteriores já conferiram.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "A qualidade é de todos, mas cada etapa confere a sua parte."
                  }
                ]
              }
            }
          },
          {
            "tipo": "missao",
            "competencia": "visao_processo",
            "titulo": "Missão: a viagem do seu pedido",
            "objetivo": "Mostrar que você sabe seguir o caminho completo do pedido, usando as cinco perguntas em cada etapa.",
            "contexto": "Pedido de exemplo: o cliente Rafael pediu três miniaturas personalizadas de um personagem, com pintura, a partir de fotos. O cartão acabou de entrar no Kanban.",
            "tarefas": [
              "Diga as etapas por onde esse pedido passa, na ordem, de Negociação até Enviado. Diga se alguma poderia ser pulada.",
              "Escolha a etapa em que você trabalha e responda às cinco perguntas: o que estou recebendo, o que preciso saber, o que faço, como confiro e o que entrego à próxima pessoa.",
              "Diga uma informação que pode faltar nessa etapa e o que você faria para conseguir essa informação sem supor.",
              "Diga o que faria se achasse um defeito: identificar, separar, comunicar e esperar a decisão.",
              "Diga qual fato real permitiria mover o cartão para a etapa seguinte."
            ],
            "criterioConclusao": "Você seguiu o caminho na ordem, respondeu às cinco perguntas para a sua etapa, consultou a fonte em vez de supor e tratou o defeito sem esconder e sem avançar sem autorização."
          }
        ]
      }
    ]
  },
  "comercial": {
    "id": "comercial",
    "nome": "Formação Comercial Valente",
    "descricao": "Do atendimento ao pós-venda: como vender o que a Valente produz.",
    "icone": "🎓",
    "versao": 5,
    "cargosPermitidos": [
      "comercial"
    ],
    "competencias": [
      "Atendimento e condução de venda",
      "Orçamento e formação de preço",
      "Fluxo de pedido no Valente OS",
      "Venda em marketplace",
      "Negociação e prospecção"
    ],
    "criteriosConclusao": "Atender um pedido fictício; perguntar a finalidade de uso; recusar a linha atual de resina para brincadeira infantil; registrar dados e condições sem inventar; explicar empenho corretamente. Exige revisão do responsável antes de atendimento sem supervisão.",
    "dias": [
      {
        "dia": 1,
        "titulo": "Minha Estação Comercial Valente",
        "subtitulo": "Conhecer as ferramentas do usuário Comercial e para que serve cada uma, antes de atender clientes",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Antes de vender, conheça suas ferramentas",
            "texto": "O Valente OS guarda as informações que o Comercial e as outras áreas usam. Você não precisa decorar tudo no primeiro dia. Precisa aprender onde cada informação nasce, onde você consulta e quando usar cada ferramenta. No usuário Comercial, as áreas principais são: Pedidos, Peças Próprias, Caixa, Orçamento, Propostas, Tarefas e Centro de Capacitação. Regra do Dia 1: antes de perguntar a alguém ou responder de memória, veja se a informação já está na ferramenta certa."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "operacao_os",
            "local": "Aba Pedidos",
            "instrucao": "Abra a aba Pedidos. Nela ficam os pedidos registrados e o andamento de cada trabalho. Essa tela é o Kanban: um quadro com colunas. Cada pedido é um cartão que passa de uma coluna para a outra quando avança. Na Valente, as colunas podem ser: Negociação, Pago, Modelando, Imprimindo, Pós-impressão, Pintura, Preparar p/ envio e Enviado. O nome da coluna mostra a etapa atual. Estar em Pintura não quer dizer que o pedido está pronto para retirada. Ainda podem faltar preparação, conferência e envio. Cada cartão mostra a etapa atual da produção, como modelagem, impressão ou pintura. A tela se atualiza sozinha a cada 60 segundos. Você não precisa recarregar."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que existe dentro de um pedido",
            "texto": "Um pedido precisa mostrar quem pediu, o que foi combinado e o que será produzido. Os campos exatos são os da tela real do Valente OS. Cliente: quem está comprando. Produto ou serviço: o que será produzido ou entregue. Quantidade. Valor: o valor combinado. Pagamento, entrada e saldo: conforme a regra atual e os campos da tela. Prazo: o que foi confirmado. Observações: detalhes necessários para fazer certo. Atenção: nunca invente um dado só para completar um campo. Se uma informação obrigatória ainda não foi confirmada, siga o procedimento da Valente ou consulte o responsável."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "produtos",
            "local": "Aba Peças Próprias",
            "instrucao": "Abra Peças Próprias. Aqui ficam os produtos e as referências que a Valente já cadastrou. Use para ver se algo já existe antes de tratar o pedido como projeto novo. Olhe os campos da tela: nome, foto, preço, estoque, categoria, tamanho ou outros dados cadastrados."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "ferramentas_digitais",
            "local": "Aba Caixa",
            "instrucao": "Abra Caixa. O Comercial usa esta área para consultar o dinheiro dos pedidos, como valores recebidos e saldos, dentro do que o seu usuário pode ver. Você não vai fazer a contabilidade da empresa. Vai conseguir responder perguntas do dia a dia sem alterar dados por suposição."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "orcamento",
            "local": "Aba Orçamento",
            "instrucao": "Abra Orçamento. Esta é a calculadora de custo. Ela forma o preço com os dados do trabalho. Orçamento não sai de memória nem de chute. A tela tem caminhos diferentes. Dois são importantes: \"Tenho STL\" e \"Só tenho imagem\". Atenção: a calculadora gera o custo. O documento que vai para o cliente é montado na aba Propostas, que você conhece no Dia 4. Hoje, só encontre esses dois caminhos."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "ferramentas_digitais",
            "local": "Aba Propostas e aba Tarefas",
            "instrucao": "Abra a aba Propostas. Veja a lista de propostas salvas, com busca e filtro por status (rascunho, enviada, aprovada, recusada). Depois abra a aba lateral Tarefas. Lá o Comercial vê as tarefas que recebeu, como contatar um cliente, confirmar um pagamento ou aprovar uma arte. Só olhe. Não altere nada."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "ferramentas_digitais",
            "local": "Centro de Capacitação (aqui mesmo)",
            "instrucao": "É a área em que você está agora. Aqui ficam as trilhas de aprendizagem, o seu progresso e, no futuro, consultas rápidas de procedimento. Quando não lembrar como fazer algo, procure primeiro no Centro de Capacitação."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "operacao_os",
            "pergunta": "Um cliente pergunta: \"Em que etapa está meu pedido?\" Onde você procura primeiro?",
            "opcoes": [
              "Caixa",
              "Pedidos/Kanban",
              "Orçamento",
              "Peças Próprias"
            ],
            "correta": 1,
            "feedbackCerto": "Isso mesmo. O Kanban mostra em que etapa o pedido está.",
            "feedbackPorOpcao": [
              "Caixa mostra dinheiro, não a etapa. Tente de novo.",
              null,
              "Orçamento calcula preço, não mostra a etapa. Tente de novo.",
              "Peças Próprias mostra produtos cadastrados, não a etapa do pedido. Tente de novo."
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "ferramentas_digitais",
            "pergunta": "Você precisa ver quanto ainda falta pagar de um pedido. Onde procura?",
            "opcoes": [
              "Caixa",
              "Orçamento",
              "Peças Próprias",
              "Centro de Capacitação"
            ],
            "correta": 0,
            "feedbackCerto": "Certo. No Caixa você consulta pagamento e saldo, dentro do que o Comercial pode ver.",
            "feedbackPorOpcao": [
              null,
              "Orçamento calcula preço, não mostra o que já foi pago. Tente de novo.",
              "Peças Próprias não mostra pagamento. Tente de novo.",
              "Centro de Capacitação é para aprender, não para ver pagamento. Tente de novo."
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "produtos",
            "pergunta": "O cliente pergunta se a Valente já tem um certo modelo cadastrado. Onde você começa a busca?",
            "opcoes": [
              "Pedidos",
              "Caixa",
              "Peças Próprias",
              "Orçamento"
            ],
            "correta": 2,
            "feedbackCerto": "Certo. Lá ficam os produtos e as referências já cadastrados.",
            "feedbackPorOpcao": [
              "Pedidos mostra pedidos já registrados, não o catálogo. Tente de novo.",
              "Caixa mostra dinheiro. Tente de novo.",
              null,
              "Orçamento calcula preço, não mostra o catálogo. Tente de novo."
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "orcamento",
            "pergunta": "Você precisa calcular o preço de uma impressão. Qual ferramenta foi criada para isso?",
            "opcoes": [
              "Orçamento",
              "Caixa",
              "Pedidos",
              "Capacitação"
            ],
            "correta": 0,
            "feedbackCerto": "Certo. No Dia 4 você aprende a usar essa ferramenta.",
            "feedbackPorOpcao": [
              null,
              "Caixa não calcula preço. Tente de novo.",
              "Pedidos serve para registrar depois de orçar. Tente de novo.",
              "Capacitação é para aprender, não para calcular. Tente de novo."
            ]
          }
        ]
      },
      {
        "dia": 2,
        "titulo": "Como funciona um pedido",
        "subtitulo": "Aprender a registrar os dados mínimos, entender o cartão do pedido e ler o Kanban",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Por que registrar certo",
            "texto": "O pedido é o registro do que foi combinado com o cliente. Se o registro estiver incompleto ou errado, a produção, o financeiro e o atendimento podem trabalhar com informações diferentes. Registrar não é \"encher campos\". É deixar o pedido claro para outra pessoa entender sem depender da memória de quem atendeu."
          },
          {
            "tipo": "conteudo",
            "titulo": "Dados mínimos e de onde vêm",
            "texto": "Cliente: vem do cadastro ou da identificação de quem compra. Produto e quantidade: vêm do que foi aprovado. Valor: vem do orçamento ou da negociação. Pagamento: vem do que foi recebido de verdade ou da condição confirmada. Prazo: é o prazo confirmado, não o que o cliente deseja e ainda não foi validado. Observações: guardam detalhes importantes para fazer o trabalho."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "operacao_os",
            "local": "Criação/edição de pedido",
            "instrucao": "Abra a criação ou edição de pedido. Passe pelos campos sem salvar um pedido real. Em cada campo, pense: \"de onde vem esta informação?\" e \"o que acontece se eu preencher errado?\"."
          },
          {
            "tipo": "conteudo",
            "titulo": "Entendendo melhor o Kanban",
            "texto": "Negociação: a venda ainda está sendo tratada. Pago: mostra a condição de pagamento ou entrada, conforme a regra atual. Modelando: o modelo 3D está sendo feito. Imprimindo: a peça está na impressora. Pós-impressão: reúne os trabalhos feitos depois da impressão. Pintura: a peça está sendo pintada. Preparar p/ envio: conferência, embalagem ou preparação para sair. Enviado: o pedido seguiu para o cliente. Nem todo trabalho precisa de todas as etapas. O importante é ler o que a tela mostra e não prometer o que o sistema não confirma. Cada cartão mostra a etapa atual da produção. A tela atualiza sozinha a cada 60 segundos."
          },
          {
            "tipo": "conteudo",
            "titulo": "Aguardando liberação e o botão Liberar",
            "texto": "Pedido novo fica como \"Aguardando liberação\". No cartão do Kanban aparece o botão \"Liberar\". Quando você clica, o sistema gera a ordem de produção, o plano e as tarefas das pessoas da produção. Se ainda não há pagamento nem empenho registrado, o botão avisa a pendência e não libera. Pedido de instituição com empenho pendente também não pode ir para uma etapa de produção. O empenho precisa estar registrado primeiro. Liberar é o que faz o pedido sair do papel e entrar na fila da produção."
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "operacao_os",
            "afirmacao": "Um pedido novo, sem pagamento nem empenho registrado, pode ser liberado normalmente. O botão Liberar gera as tarefas mesmo assim.",
            "correta": false,
            "feedbackCerto": "Isso mesmo. O botão avisa a pendência de pagamento ou empenho antes de liberar.",
            "feedbackErrado": "O botão Liberar avisa a pendência quando não há pagamento nem empenho. Não force a liberação. Resolva a pendência primeiro."
          },
          {
            "tipo": "conteudo",
            "titulo": "Como responder sobre o andamento",
            "texto": "Siga esta ordem: consultar, entender e responder. Se o status não bastar: consultar, confirmar com o responsável e responder."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "operacao_os",
            "pergunta": "O pedido aparece em \"Imprimindo\". O cliente pergunta: \"Já está sendo pintado?\"",
            "opcoes": [
              "Sim, porque já está em produção.",
              "Não dá para afirmar. O sistema ainda mostra Imprimindo.",
              "Sim, impressão e pintura são a mesma etapa.",
              "Verificar o Caixa."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Pintura é uma etapa que vem depois.",
            "feedbackPorOpcao": [
              "O sistema ainda não mostra Pintura. Não dá para afirmar isso. Tente de novo.",
              null,
              "Impressão e pintura são etapas diferentes. Tente de novo.",
              "Caixa mostra dinheiro, não a etapa de produção. Tente de novo."
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "operacao_os",
            "erroCriticoOpcoes": [
              0,
              2
            ],
            "pergunta": "O pedido aparece em \"Pintura\". O cliente pergunta se pode retirar hoje. O que fazer?",
            "opcoes": [
              "Confirmar a retirada na hora.",
              "Verificar se as etapas necessárias terminaram e se está liberado.",
              "Mover para Enviado.",
              "Dizer que não, sem consultar."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Estar em Pintura não quer dizer que está pronto para retirada.",
            "feedbackPorOpcao": [
              "Confirmar sem verificar é erro crítico. Pedido no meio do caminho não está liberado.",
              null,
              "Mover o pedido para fingir que está pronto é erro crítico.",
              "Recusar sem consultar também pode estar errado. Verifique antes."
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "operacao_os",
            "pergunta": "Qual informação deve entrar no campo prazo?",
            "opcoes": [
              "O prazo que o cliente gostaria, mesmo sem confirmação.",
              "O prazo confirmado conforme o processo da empresa.",
              "Qualquer data aproximada.",
              "A data em que a conversa começou."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. O registro deve mostrar o que foi confirmado de verdade.",
            "feedbackPorOpcao": [
              "Desejo do cliente não é prazo confirmado. Tente de novo.",
              null,
              "Data aproximada não é confirmação. Tente de novo.",
              "A data do início da conversa não é o prazo de entrega. Tente de novo."
            ]
          },
          {
            "tipo": "missao",
            "competencia": "operacao_os",
            "titulo": "Missão do dia",
            "objetivo": "Praticar quais dados mínimos um pedido precisa ter e em que etapa do Kanban ele começa.",
            "contexto": "Pense em um pedido de mentira.",
            "tarefas": [
              "Diga quais são: cliente, produto, quantidade, valor, pagamento e saldo, prazo e observações.",
              "Diga em qual etapa do Kanban esse pedido começaria, pelo procedimento da Valente. Não grave dados reais."
            ],
            "criterioConclusao": "Ter definido os dados e a etapa inicial antes de marcar como concluída."
          }
        ]
      },
      {
        "dia": 3,
        "titulo": "O que a Valente vende?",
        "subtitulo": "Entender os tipos de pedido para saber qual ferramenta e qual caminho usar depois",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Produto existente, personalizado e projeto novo",
            "texto": "Produto existente: já foi desenvolvido e pode ter cadastro em Peças Próprias. Produto personalizado: parte de algo que já existe, mas recebe mudanças. Projeto sob encomenda: nasce de foto, desenho, ideia ou necessidade e ainda precisa de modelagem, que é criar o modelo 3D."
          },
          {
            "tipo": "conteudo",
            "titulo": "Quando o cliente já tem STL",
            "texto": "STL é um arquivo 3D usado como base para a impressão. Com o STL, pode não ser preciso criar o modelo do zero. Mas você ainda precisa perguntar sobre tamanho, quantidade, acabamento, material adequado e prazo."
          },
          {
            "tipo": "conteudo",
            "titulo": "Resina e FDM: o que o Comercial precisa saber",
            "texto": "Resina e FDM são dois tipos de impressão 3D. A resina costuma ser indicada quando detalhe e acabamento vêm primeiro. A FDM costuma ser usada em peças maiores, em peças de uso ou quando ela atende melhor ao projeto. Não trate isso como regra fixa. Dúvida técnica deve ser confirmada com a produção."
          },
          {
            "tipo": "conteudo",
            "titulo": "Miniatura de resina não é brinquedo",
            "texto": "As miniaturas de resina da linha atual da Valente Artes são peças colecionáveis. Elas podem quebrar e ter partes pequenas. Não foram validadas para uso como brinquedos. Antes de oferecer uma peça, pergunte: é para coleção ou decoração, ou é para uma criança brincar? Se for para criança brincar, explique que essa linha não é adequada e não ofereça a peça para esse uso. Se tiver dúvida, consulte o responsável."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "seguranca_produto",
            "pergunta": "Uma pessoa quer comprar uma miniatura de resina para uma criança brincar. O que você faz?",
            "opcoes": [
              "Vendo e digo que basta ter cuidado.",
              "Explico que a miniatura é colecionável, não é adequada para criança brincar, e não ofereço para esse uso.",
              "Digo que qualquer peça impressa em 3D é brinquedo seguro."
            ],
            "correta": 1,
            "feedbackCerto": "Isso mesmo. Confirme o uso e não venda a linha atual de resina como brinquedo.",
            "feedbackErrado": "Volte à orientação sobre o uso da peça. Antes de vender, confirme para que ela será usada. Miniaturas de resina da linha atual não são brinquedos."
          },
          {
            "tipo": "conteudo",
            "titulo": "A quantidade muda o trabalho",
            "texto": "Produzir uma unidade é diferente de produzir cem. A quantidade pode mudar a capacidade, o prazo, a organização, o custo e a entrega. Por isso, pedido grande precisa de análise antes de você prometer condição ou prazo."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "produtos",
            "pergunta": "\"Quero esse modelo do catálogo, mas com outro nome na base.\" Que tipo de pedido é esse?",
            "opcoes": [
              "Produto existente sem alteração",
              "Produto personalizado",
              "Projeto totalmente novo",
              "Apenas impressão de STL"
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Já existe uma base, mas o cliente pediu uma mudança.",
            "feedbackPorOpcao": [
              "O cliente pediu uma mudança. Não é sem alteração. Tente de novo.",
              null,
              "Já existe uma base pronta. Não é do zero. Tente de novo.",
              "O cliente não falou em arquivo 3D. Tente de novo."
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "produtos",
            "pergunta": "\"Tenho STL e quero 80 unidades pintadas.\" O que o STL resolve e o que ainda falta analisar?",
            "opcoes": [
              "Resolve tudo.",
              "Resolve o arquivo 3D. Ainda falta analisar tamanho, quantidade, acabamento, prazo e as outras condições.",
              "Só resolve o pagamento.",
              "Significa que deve ser FDM."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Arquivo pronto não resolve as outras questões da venda e da produção.",
            "feedbackPorOpcao": [
              "O STL só resolve o arquivo, não o resto. Tente de novo.",
              null,
              "STL não tem relação com pagamento. Tente de novo.",
              "Ter STL não define o tipo de impressão. Tente de novo."
            ]
          },
          {
            "tipo": "missao",
            "competencia": "produtos",
            "titulo": "Missão de classificação",
            "objetivo": "Dizer o tipo de cada pedido e o que ainda falta descobrir antes de orçar.",
            "contexto": "Cinco pedidos: peça do catálogo, peça do catálogo com personalização, STL pronto, foto sem arquivo 3D, pedido de 200 unidades.",
            "tarefas": [
              "Diga o tipo de cada um dos 5 pedidos.",
              "Para cada um, diga qual informação ainda falta antes de orçar."
            ],
            "criterioConclusao": "Ter dito o tipo dos 5 pedidos e a informação que falta em cada um antes de marcar como concluída."
          }
        ]
      },
      {
        "dia": 4,
        "titulo": "Aprendendo a fazer um orçamento",
        "subtitulo": "Conhecer a aba Orçamento, entender os caminhos e saber quais informações a ferramenta pede",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que é um orçamento",
            "texto": "Orçar é usar os dados do pedido, as regras e as ferramentas da empresa para chegar a uma proposta. O preço não se escolhe por sensação. O material é só uma parte. Também podem entrar mão de obra, perdas, operação, acabamento, taxas, impostos e margem, que é o ganho da empresa."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "ferramentas_digitais",
            "local": "Aba Orçamento",
            "instrucao": "Abra a aba Orçamento. Encontre os caminhos \"Tenho STL\" e \"Só tenho imagem\". Olhe os campos de cada caminho."
          },
          {
            "tipo": "conteudo",
            "titulo": "Caminho: Tenho STL",
            "texto": "Use quando o cliente manda um arquivo 3D. A ferramenta pode pedir dados tirados do arquivo ou definidos no pedido, como medidas, tipo de impressão, material, tempo ou peso estimado, quantidade e acabamento, conforme a versão atual do sistema."
          },
          {
            "tipo": "conteudo",
            "titulo": "Caminho: Só tenho imagem",
            "texto": "Use quando o cliente tem foto, desenho ou referência, mas não tem um modelo 3D pronto. Nesse caso pode existir uma etapa de avaliação ou modelagem antes da produção. Não trate a imagem como se fosse um STL."
          },
          {
            "tipo": "conteudo",
            "titulo": "As 6 perguntas de ouro agora têm um motivo",
            "texto": "O que deseja produzir? Tem arquivo 3D ou só imagem? Qual tamanho? Quantas unidades? Precisa de pintura ou acabamento? Para quando precisa? Essas perguntas existem porque as ferramentas e a produção precisam dessas respostas para escolher o caminho, calcular e ver se dá para fazer."
          },
          {
            "tipo": "conteudo",
            "titulo": "Orçamento calcula, Proposta apresenta",
            "texto": "A aba Orçamento é a calculadora de custo. O documento que o cliente recebe é montado na aba Propostas. É um cartão com a logo azul do Estúdio Valente Artes, os itens, a validade (padrão de 10 dias), o prazo de entrega (padrão de 30 dias), as condições de pagamento e os dados do estúdio no rodapé. Para instituição, o pedido público pode exigir empenho. As condições de recebimento seguem o contrato. Para enviar, use os botões Copiar como imagem, Copiar como texto, Baixar imagem, Baixar PDF ou Abrir WhatsApp. Se o prazo ou a validade padrão não servir, confirme com o responsável antes de alterar."
          },
          {
            "tipo": "conteudo",
            "titulo": "Propostas salvas, revisões e aprovação",
            "texto": "Todas as propostas ficam salvas, com busca e filtro por status: rascunho, enviada, aprovada e recusada. Quando você altera uma proposta, a versão anterior fica guardada nas revisões. Assim você sempre sabe o que foi enviado antes. Para cliente que já comprou, o editor mostra o histórico de pedidos e propostas anteriores, e você pode reaproveitar. Quando o cliente aceita, o botão Aprovar na proposta cria o pedido em Negociação e a tarefa de contato para fechar a venda."
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "orcamento",
            "pergunta": "Quais destas frases mostram o que o sistema guarda ou faz com as propostas?",
            "itens": [
              "A versão anterior fica guardada quando a proposta é alterada",
              "Aprovar a proposta cria o pedido em Negociação",
              "Proposta enviada some da lista",
              "Cliente que já comprou mostra histórico de pedidos e propostas anteriores"
            ],
            "corretos": [
              0,
              1,
              3
            ],
            "feedbackCerto": "Isso mesmo. Revisões guardadas, pedido criado ao aprovar e histórico do cliente que já comprou.",
            "feedbackErrado": "Todas as propostas ficam salvas na lista, com filtro por status. Só a frase que diz que a proposta enviada some está errada."
          },
          {
            "tipo": "missao",
            "competencia": "orcamento",
            "titulo": "Exercício orientado",
            "objetivo": "Praticar a escolha do caminho certo da calculadora.",
            "contexto": "Caso A: STL pronto, 1 unidade. Caso B: somente fotografia. Caso C: STL pronto, 50 unidades pintadas.",
            "tarefas": [
              "Em cada caso, diga qual é o caminho da ferramenta (Tenho STL ou Só tenho imagem).",
              "Em cada caso, liste os dados que ainda faltam. Não grave dados reais."
            ],
            "criterioConclusao": "Ter pensado nos 3 casos antes de marcar como concluída."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "orcamento",
            "pergunta": "O cliente manda só uma fotografia e pede preço. Qual caminho você considera primeiro?",
            "opcoes": [
              "Tratar a foto como STL.",
              "O caminho de imagem, com avaliação ou modelagem quando for preciso.",
              "Usar o preço de um produto parecido.",
              "Perguntar somente a forma de pagamento."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Foto é referência visual, não é arquivo 3D pronto.",
            "feedbackPorOpcao": [
              "Foto não é STL. Tente de novo.",
              null,
              "Comparar com outro produto não substitui o cálculo real. Tente de novo.",
              "A forma de pagamento vem depois de orçar. Tente de novo."
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "orcamento",
            "pergunta": "Por que não basta saber o custo do material para definir o preço?",
            "opcoes": [
              "Porque material nunca entra no preço.",
              "Porque existem outros custos e regras que também podem entrar na proposta.",
              "Porque todo produto precisa ter o mesmo preço.",
              "Porque o cliente escolhe o lucro."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Preço não é só o material mais um valor qualquer.",
            "feedbackPorOpcao": [
              "Material entra no preço, sim. Só não é o único custo. Tente de novo.",
              null,
              "Cada produto tem o seu custo. O preço não é sempre o mesmo. Tente de novo.",
              "O cliente não escolhe o lucro. Tente de novo."
            ]
          }
        ]
      },
      {
        "dia": 5,
        "titulo": "Agora vamos atender o cliente",
        "subtitulo": "Usar as ferramentas que você já conhece para receber, entender, confirmar, apresentar e conduzir um pedido",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Atender não é decorar frases",
            "texto": "Agora você já conhece o sistema, sabe o que é um pedido, reconhece os tipos de pedido e conhece os caminhos do orçamento. O atendimento serve para conseguir e organizar as informações que essas ferramentas precisam."
          },
          {
            "tipo": "conteudo",
            "titulo": "Os passos do atendimento",
            "texto": "São cinco passos: receber, entender, confirmar, apresentar e conduzir. Receber é acolher o cliente. Entender é descobrir o que ele precisa. Confirmar é repetir e organizar o que você entendeu. Apresentar é oferecer a solução ou a proposta certa. Conduzir é dizer qual é o próximo passo."
          },
          {
            "tipo": "conteudo",
            "titulo": "Pergunte só o que falta",
            "texto": "Não faça um interrogatório. Use o que o cliente já disse e pergunte só o que falta. Se ele já disse a quantidade, não pergunte de novo. Se mandou STL, não pergunte se tem arquivo 3D. A conversa deve ser natural e trazer informação útil."
          },
          {
            "tipo": "conteudo",
            "titulo": "Quando não souber",
            "texto": "Nunca trate dúvida como certeza. Diga: \"Vou confirmar essa informação e retorno para você.\" Isso vale para técnica, prazo, capacidade, desconto ou regra que não esteja clara."
          },
          {
            "tipo": "conteudo",
            "titulo": "Pergunte para que a peça será usada",
            "texto": "No atendimento, descubra o uso da peça antes de fechar a venda. Uma miniatura de resina para coleção é diferente de um brinquedo para criança. Se o cliente disser que é para brincar, explique com calma que a linha atual é frágil, pode ter partes pequenas e não é adequada para esse uso. Não prometa segurança infantil nem certificação que a Valente não possui."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "seguranca_produto",
            "pergunta": "O cliente diz: \"É para meu filho pequeno brincar\". Qual resposta é adequada?",
            "opcoes": [
              "\"Pode levar, porque é feita em impressora 3D.\"",
              "\"Eu prometo que não quebra.\"",
              "\"Esta miniatura de resina é colecionável e não é adequada para criança brincar. Não posso oferecê-la para esse uso.\""
            ],
            "correta": 2,
            "feedbackCerto": "Certo. A resposta mostra o limite do produto sem prometer segurança que não foi comprovada.",
            "feedbackErrado": "Volte à orientação sobre o uso da peça. Antes de vender, confirme para que ela será usada. Miniaturas de resina da linha atual não são brinquedos."
          },
          {
            "tipo": "conteudo",
            "titulo": "Aprovar arte e aprovar orçamento",
            "texto": "Depois do atendimento, o sistema cria tarefas para você. Em Aprovar arte, há um quadro com as imagens carregadas (a arte do mascote ou da peça) e o botão Copiar imagem. Você cola a imagem no WhatsApp junto da mensagem pronta \"Olá! Segue a arte da sua peça para aprovação...\". As respostas possíveis são três. Aprovou: libera a impressão, e dá para anexar o print da aprovação. Pediu ajustes: você descreve, o sistema cria uma tarefa de Modelagem de ajuste e conta a rodada. Ainda não respondeu: nova cobrança. Em Aprovar orçamento, as respostas são: Aprovou, Pediu ajuste de valor ou quantidade, Recusou (com motivo) ou Ainda não respondeu."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "atendimento",
            "cliente": "Gostei da arte do mascote, mas queria o chapéu um pouco maior e outra cor na faixa.",
            "opcoes": [
              {
                "label": "Marcar Aprovou, porque ele disse que gostou, e ajustar depois.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Aprovou libera a impressão. Ele pediu ajustes. Liberar agora seria imprimir a arte errada."
              },
              {
                "label": "Marcar Ainda não respondeu e esperar novo contato.",
                "correta": false,
                "feedback": "Ele respondeu, e com pedidos claros. Registre isso para a modelagem trabalhar."
              },
              {
                "label": "Marcar Pediu ajustes e descrever o chapéu maior e a nova cor da faixa.",
                "correta": true,
                "feedback": "Isso cria a tarefa de Modelagem de ajuste e conta a rodada. A aprovação volta quando a modelagem termina."
              },
              {
                "label": "Pedir que ele mande tudo de novo por escrito e não registrar nada no sistema.",
                "correta": false,
                "feedback": "O pedido já está claro. É o registro no sistema que chama a modelagem."
              }
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "atendimento",
            "erroCriticoOpcoes": [
              3
            ],
            "pergunta": "Cliente: \"Quanto custa uma miniatura personalizada?\" Qual resposta começa melhor o atendimento?",
            "opcoes": [
              "\"R$70.\"",
              "\"Claro. Você já tem alguma referência, foto ou arquivo 3D do que gostaria de fazer?\"",
              "\"Depende.\"",
              "\"Me mande o pagamento primeiro.\""
            ],
            "correta": 1,
            "feedbackCerto": "Certo. A resposta acolhe e já busca uma informação que define o caminho do orçamento.",
            "feedbackPorOpcao": [
              "Você deu um preço sem saber nada sobre o pedido. Tente de novo.",
              null,
              "Resposta vaga, não leva a nada. Tente de novo.",
              "Pedir pagamento antes de entender o pedido é erro crítico."
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "atendimento",
            "erroCriticoOpcoes": [
              2,
              3
            ],
            "pergunta": "Cliente: \"Tenho STL, quero 30 unidades de 8 cm pintadas para um evento daqui a 20 dias.\" Qual atitude é melhor?",
            "opcoes": [
              "Repetir as seis perguntas de ouro desde o começo.",
              "Aproveitar o que ele já disse, perguntar só o que falta e verificar orçamento e capacidade.",
              "Dar desconto automático pela quantidade.",
              "Prometer o prazo."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Bom atendimento aproveita o que o cliente já disse e evita interrogatório.",
            "feedbackPorOpcao": [
              "Repetir o que ele já disse vira interrogatório. Tente de novo.",
              null,
              "Desconto automático, fora da sua autonomia, é erro crítico.",
              "Prometer prazo sem verificar a capacidade é erro crítico."
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "atendimento",
            "pergunta": "Cliente: \"Vi uma peça de vocês no Instagram e queria fazer uma parecida para minha filha.\" Qual é a melhor primeira resposta?",
            "opcoes": [
              "\"Fazemos sim. Custa R$70 e fica pronta em 10 dias.\"",
              "\"Depende da peça.\"",
              "\"Que bom que gostou! Qual peça você viu? Pode me mandar a foto ou o link?\"",
              "\"Só fazemos se você tiver o arquivo 3D.\""
            ],
            "correta": 2,
            "feedbackCerto": "Certo. A resposta acolhe, descobre qual é a peça e não inventa preço nem prazo.",
            "feedbackErrado": "A primeira resposta deve acolher e descobrir qual peça o cliente viu. Não dê preço nem prazo antes de entender o pedido."
          },
          {
            "tipo": "missao",
            "competencia": "atendimento",
            "titulo": "Missão",
            "objetivo": "Fazer de cabeça três atendimentos e dizer qual ferramenta usar depois.",
            "contexto": "1) cliente com produto do catálogo. 2) cliente com STL. 3) cliente só com fotos.",
            "tarefas": [
              "Faça os três atendimentos de treino.",
              "Em cada um, diga qual ferramenta do Valente OS você usa depois da conversa."
            ],
            "criterioConclusao": "Ter pensado nos 3 atendimentos e na ferramenta de cada um antes de marcar como concluída."
          }
        ]
      },
      {
        "dia": 6,
        "titulo": "Da negociação ao pedido",
        "subtitulo": "Passar uma venda aprovada para o sistema do jeito certo, sem confundir conversa com pedido",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que muda quando o cliente aprova",
            "texto": "Quando o cliente aprova, a venda precisa virar registro no sistema. O pedido deve mostrar o que foi combinado: produto, quantidade, valor, pagamento, prazo confirmado e observações importantes. Quando a aprovação vem pela proposta ou pela tarefa Aprovar orçamento, o sistema já cria o pedido em Negociação. A sua parte é conferir se ele mostra o combinado e seguir para fechar a venda."
          },
          {
            "tipo": "conteudo",
            "titulo": "Confira antes de registrar",
            "texto": "Antes de concluir o pedido, compare o que está no sistema com o que foi aprovado. Uma diferença pequena pode virar erro grande na produção."
          },
          {
            "tipo": "conteudo",
            "titulo": "Pagamento e início do trabalho",
            "texto": "Não invente regra de entrada ou condição de pagamento. Use a regra atual. Se tiver dúvida, consulte o responsável. Ao fechar o pedido, o contato registra o combinado e a forma de pagamento: Pix, Transferência, Dinheiro/cartão e, só para instituições públicas, Empenho (recebimento conforme contrato e trâmites do órgão). Quando há pagamento previsto, o sistema gera a tarefa Confirmar pagamento na data. Nela você registra o valor recebido. Aí o pedido vai para Pago e a produção pode começar. Se o dinheiro ainda não caiu, você reagenda e a tarefa volta em 2 dias. O status financeiro deve mostrar o que aconteceu de verdade."
          },
          {
            "tipo": "conteudo",
            "titulo": "Empenho: número antes de começar",
            "texto": "Empenho não é pagamento. É um registro de compromisso de gasto feito pelo órgão público. O recebimento depende do contrato, da conferência do fornecimento e dos procedimentos do órgão. Na Valente, a regra ensinada é exigir o número do empenho antes de liberar a produção, quando essa condição se aplica ao pedido. O número do empenho precisa existir ANTES de iniciar o trabalho. Sem o número, o pedido fica \"Aguardando empenho\", a produção não começa e a tarefa Cobrar empenho volta a cada 7 dias. Também não é possível mover o pedido para uma etapa de produção com empenho pendente. Nunca invente ou estime o número só para destravar o pedido."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "operacao_os",
            "cliente": "Sou da prefeitura. Já aprovamos o orçamento, pode começar a produzir. O número do empenho sai na semana que vem.",
            "opcoes": [
              {
                "label": "Começar a produção e registrar o empenho depois.",
                "correta": false,
                "erroCritico": true,
                "feedback": "O número do empenho precisa existir antes de iniciar o trabalho."
              },
              {
                "label": "Registrar o pedido com forma de pagamento Empenho. Ele fica Aguardando empenho e a produção só começa quando o número for registrado.",
                "correta": true,
                "feedback": "É assim que o sistema funciona. A tarefa Cobrar empenho volta a cada 7 dias para você acompanhar."
              },
              {
                "label": "Registrar um número de empenho provisório para liberar.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Inventar um número é registrar informação falsa."
              },
              {
                "label": "Escolher Pix para o pedido não travar.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Registrar uma forma de pagamento diferente da combinada deixa o financeiro errado."
              }
            ]
          },
          {
            "tipo": "conteudo",
            "titulo": "Acompanhamento depois da venda",
            "texto": "Depois de registrar, o Comercial acompanha pelo Kanban e consulta o Caixa quando precisar. Olhe primeiro no sistema antes de interromper a produção ou o financeiro. Depois da entrega, a tarefa de pós-compra pergunta como foi. Recebeu e está satisfeito: pede avaliação e encerra. Ainda não recebeu: você confere o rastreio e a tarefa volta em 2 dias. Há um problema: você descreve e abre uma tarefa de resolução. Não respondeu: nova tentativa em 2 dias."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "operacao_os",
            "erroCriticoOpcoes": [
              0,
              2
            ],
            "pergunta": "O cliente diz \"pode fazer\", mas a condição de pagamento ainda não está confirmada. O que fazer?",
            "opcoes": [
              "Marcar como Pago para adiantar.",
              "Seguir a regra atual e confirmar o que falta antes de mostrar o pedido como pago.",
              "Inventar 50% de entrada.",
              "Enviar direto para impressão."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. O sistema deve mostrar fatos e regras confirmadas.",
            "feedbackPorOpcao": [
              "Marcar como pago sem o pagamento é erro crítico.",
              null,
              "Inventar uma porcentagem é erro crítico.",
              "Mandar para a produção sem confirmar o pagamento foge da regra e traz risco."
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "operacao_os",
            "pergunta": "Ao registrar o pedido, você nota que o prazo no WhatsApp era só um desejo do cliente e nunca foi confirmado. O que fazer?",
            "opcoes": [
              "Registrar como prazo fechado.",
              "Confirmar se dá para cumprir antes de registrar como compromisso.",
              "Escolher uma data parecida.",
              "Deixar a produção descobrir depois."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Desejo do cliente não é prazo confirmado.",
            "feedbackPorOpcao": [
              "Isso não foi confirmado. Não registre como fechado. Tente de novo.",
              null,
              "Chutar uma data parecida é inventar informação. Tente de novo.",
              "Deixar a produção descobrir depois cria um problema que dava para evitar. Tente de novo."
            ]
          },
          {
            "tipo": "missao",
            "competencia": "operacao_os",
            "titulo": "Missão",
            "objetivo": "Passar um orçamento aprovado para um pedido registrado do jeito certo.",
            "contexto": "Receba um orçamento de treino já aprovado.",
            "tarefas": [
              "Junte as informações necessárias para criar o pedido.",
              "Diga como você acompanharia o trabalho até Enviado."
            ],
            "criterioConclusao": "Ter juntado as informações e dito como acompanharia antes de marcar como concluída."
          }
        ]
      },
      {
        "dia": 7,
        "titulo": "Colocando um produto à venda",
        "subtitulo": "Aprender a usar informações confiáveis do produto para fazer o cadastro e o anúncio",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Antes de anunciar, a informação precisa estar certa",
            "texto": "Um anúncio ruim não é só feio. Ele pode trazer preço errado, expectativa errada, dúvidas e trabalho refeito. Antes de publicar, confira de onde vêm as informações."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que um anúncio precisa responder",
            "texto": "O que é? Para quem é? Qual tamanho? Como é feito? Quais opções existem? Quanto custa? Qual o prazo? Como comprar? O anúncio não precisa ter um texto enorme. Mas não pode esconder informação importante."
          },
          {
            "tipo": "conteudo",
            "titulo": "Descrição clara e segura",
            "texto": "No anúncio de miniaturas de resina, informe que são peças colecionáveis e frágeis, não brinquedos. Não anuncie como produto para criança brincar. Fotos, título e descrição devem mostrar a peça real. Se houver peças pequenas ou pontas frágeis, explique esse cuidado sem inventar certificações."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "seguranca_produto",
            "pergunta": "Qual informação deve aparecer em um anúncio de miniatura de resina da linha atual?",
            "opcoes": [
              "Que é um brinquedo para qualquer idade.",
              "Que é colecionável, frágil e não é para criança brincar.",
              "Que não precisa de cuidados porque é de resina."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. O anúncio precisa deixar claro para que a peça serve e quais são os cuidados.",
            "feedbackErrado": "Volte à orientação sobre o uso da peça. Antes de vender, confirme para que ela será usada. Miniaturas de resina da linha atual não são brinquedos."
          },
          {
            "tipo": "conteudo",
            "titulo": "Título, fotos e descrição",
            "texto": "O título diz com clareza qual é o produto. As fotos precisam mostrar a peça como ela é. A descrição organiza as características e as condições. Não invente característica só para o anúncio ficar mais bonito."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "produtos",
            "local": "Aba Peças Próprias",
            "instrucao": "Abra Peças Próprias e comece pelos dados cadastrados. Confirme preço, tamanho, variações e os outros campos importantes antes de publicar."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "produtos",
            "erroCriticoOpcoes": [
              1,
              3
            ],
            "pergunta": "A foto está ótima, mas o preço do cadastro está diferente do material de divulgação antigo. O que fazer?",
            "opcoes": [
              "Usar o menor preço.",
              "Publicar e corrigir depois.",
              "Confirmar qual informação está valendo antes de publicar.",
              "Tirar o preço e inventar no atendimento."
            ],
            "correta": 2,
            "feedbackCerto": "Certo. Quando duas fontes mostram dados diferentes, o Comercial confirma qual está valendo.",
            "feedbackPorOpcao": [
              "Escolher o menor preço no chute é inventar informação. Tente de novo.",
              "Publicar errado e corrigir depois é erro crítico. O cliente já pode ter visto a informação errada.",
              null,
              "Inventar preço no atendimento é erro crítico."
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "produtos",
            "pergunta": "Os dados do produto são: miniatura personalizada de pet, resina, 10 cm, pintura manual, prazo de 20 dias, preço R$85. Qual anúncio está certo?",
            "opcoes": [
              "Miniatura personalizada de pet em resina, 10 cm. Pintura manual. Prazo de 20 dias. R$85.",
              "Miniatura de pet que não quebra, 10 cm. Entrega em 5 dias. R$85.",
              "Brinquedo de pet em resina para crianças, 10 cm, pintura manual. R$85.",
              "Miniatura de pet linda e personalizada. Preço a combinar."
            ],
            "correta": 0,
            "feedbackCerto": "Certo. O anúncio usa só os dados informados e mostra produto, tamanho, prazo e preço.",
            "feedbackErrado": "O anúncio certo usa só os dados informados. Não invente qualidade, prazo ou uso, e não esconda o preço nem o prazo."
          },
          {
            "tipo": "missao",
            "competencia": "produtos",
            "titulo": "Missão",
            "objetivo": "Montar um anúncio de treino e revisar com atenção.",
            "contexto": "Use os dados da etapa anterior ou um produto de mentira parecido.",
            "tarefas": [
              "Monte um anúncio de treino.",
              "Revise procurando 5 tipos de erro: informação faltando, preço diferente, prazo ausente, foto inadequada e promessa não confirmada."
            ],
            "criterioConclusao": "Ter montado e revisado o anúncio procurando os 5 tipos de erro antes de marcar como concluída."
          }
        ]
      },
      {
        "dia": 8,
        "titulo": "Marketplaces e redes sociais",
        "subtitulo": "Entender como o canal de venda muda o preço, a conversa e o caminho do cliente",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Venda direta e marketplace não são iguais",
            "texto": "Marketplace é um site de vendas, como Shopee e Mercado Livre. Esses canais podem cobrar taxas, comissões e outros custos. Por isso, copiar o preço da venda direta pode diminuir o ganho da Valente."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que o Comercial precisa entender",
            "texto": "Do preço anunciado saem os custos e as taxas do canal. O que sobra é o valor recebido. Tirando o custo do produto, fica o ganho da Valente. Você não precisa decorar taxas. Precisa usar os números atualizados da ferramenta ou consultar o responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "Calculadora de marketplace",
            "texto": "Atenção: quando esse recurso estiver no Valente OS, a ferramenta deve mostrar os modos reais. Um modo mantém um ganho definido. O outro testa um preço de anúncio e mostra o que sobra. Enquanto o recurso não estiver disponível, a regra é consultar o responsável e não inventar porcentagem."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "marketplace",
            "erroCriticoOpcoes": [
              0,
              3
            ],
            "pergunta": "O preço na venda direta é R$70. Você pode copiar R$70 direto para qualquer marketplace?",
            "opcoes": [
              "Sim.",
              "Não. É preciso considerar os custos atuais do canal.",
              "Sim, se a peça for pequena.",
              "Não, mas basta acrescentar 10%."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Copiar o preço ou inventar uma porcentagem não substitui a ferramenta.",
            "feedbackPorOpcao": [
              "Copiar o preço direto ignora as taxas do canal. É erro crítico.",
              null,
              "O tamanho da peça não muda o fato de que o canal cobra taxas. Tente de novo.",
              "Inventar uma porcentagem fixa (10%) também é chute. É erro crítico."
            ]
          },
          {
            "tipo": "conteudo",
            "titulo": "Redes sociais como porta de entrada",
            "texto": "Nas redes, nem todo contato é venda. O Comercial precisa perceber a intenção da pessoa. Um elogio é só interesse. \"Vocês fazem personalizado?\" é uma chance de venda. \"Qual prazo para 30?\" é uma chance de venda ainda mais forte."
          },
          {
            "tipo": "conteudo",
            "titulo": "Conteúdo e próximo passo",
            "texto": "Produto mostra o que vendemos. Processo mostra como a peça é feita e acabada. Prova mostra o resultado ou a entrega. A chamada para ação diz qual é o próximo passo: WhatsApp, orçamento ou consulta."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "redes_sociais",
            "pergunta": "Qual contato o Comercial deve atender primeiro?",
            "opcoes": [
              "❤️",
              "\"Muito bonito!\"",
              "\"Vocês fazem 30 unidades com a logo da minha empresa?\"",
              "🔥"
            ],
            "correta": 2,
            "feedbackCerto": "Certo. A pessoa disse o que precisa, a quantidade e a personalização. Ela quer comprar.",
            "feedbackPorOpcao": [
              "Reação é só sinal de atenção. Tente de novo.",
              "Elogio não mostra o que a pessoa precisa. Tente de novo.",
              null,
              "Reação não mostra nenhuma necessidade. Tente de novo."
            ]
          },
          {
            "tipo": "missao",
            "competencia": "redes_sociais",
            "titulo": "Missão",
            "objetivo": "Praticar os tipos de conteúdo de venda e perceber quando um contato vira atendimento.",
            "contexto": "Produto de mentira.",
            "tarefas": [
              "Prepare uma publicação, um Story, uma resposta de Direct e uma chamada para WhatsApp.",
              "Diga qual contato deve virar atendimento."
            ],
            "criterioConclusao": "Ter preparado os itens e escolhido o contato antes de marcar como concluída."
          }
        ]
      },
      {
        "dia": 9,
        "titulo": "Negociação, follow-up e prospecção",
        "subtitulo": "Aprender a entender as objeções do cliente, respeitar sua autonomia e não abandonar uma venda",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Negociar não é dar desconto",
            "texto": "Quando o cliente diz \"está caro\", ele pode estar comparando tamanho, acabamento, prazo, personalização ou forma de pagamento. Ou pode não ter entendido o valor da proposta. Primeiro descubra o motivo."
          },
          {
            "tipo": "conteudo",
            "titulo": "Compare propostas do jeito certo",
            "texto": "Só dá para comparar preço quando as duas propostas incluem as mesmas coisas. Pergunte o que está incluído na outra proposta antes de falar mal do concorrente ou mudar o preço."
          },
          {
            "tipo": "conteudo",
            "titulo": "Autonomia",
            "texto": "Autonomia é o que você pode decidir sem perguntar. PODE: consultar produto, enviar fotos, coletar informações, acompanhar pedido e orçar dentro das regras. CONSULTAR: prazo fora do normal, grandes quantidades, produto diferente, desconto ou condição especial. NÃO PODE: inventar preço ou prazo, prometer capacidade sem verificar, dar desconto fora da autorização ou alterar o financeiro por suposição."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "negociacao",
            "cliente": "O concorrente faz mais barato.",
            "opcoes": [
              {
                "label": "\"O material dele é pior.\"",
                "correta": false,
                "feedback": "Não fale mal do concorrente. Isso não melhora a sua proposta e pode nem ser verdade."
              },
              {
                "label": "\"Então já baixo meu preço.\"",
                "correta": false,
                "erroCritico": true,
                "feedback": "Dar desconto automático para \"competir\", sem avaliar, está fora da sua autonomia."
              },
              {
                "label": "\"Entendo. O que está incluído na proposta dele para compararmos corretamente?\"",
                "correta": true,
                "feedback": "A resposta busca o motivo sem falar mal do concorrente e sem dar desconto automático."
              },
              {
                "label": "\"Compre com ele.\"",
                "correta": false,
                "feedback": "Essa resposta fecha a porta para uma venda que ainda pode acontecer."
              }
            ]
          },
          {
            "tipo": "conteudo",
            "titulo": "Follow-up",
            "texto": "Follow-up é voltar a falar com o cliente depois do orçamento. Orçamento enviado não é atendimento encerrado. Acompanhe com educação: orçamento, acompanhamento, retorno e, no fim, fechamento ou perda. O follow-up serve para ajudar o cliente a decidir, não para pressionar."
          },
          {
            "tipo": "conteudo",
            "titulo": "Registrar o contato: Como foi o contato?",
            "texto": "Cada tarefa de contato termina com a pergunta \"Como foi o contato?\". As respostas são quatro. Fechou o pedido: registra o combinado e a forma de pagamento. Cliente vai pensar e retornar: você escolhe a data do retorno. Não consegui falar com o cliente. Cliente desistiu: o sistema pede o motivo (achou caro, comprou com outra empresa, desistiu da ideia ou sem retorno) e o pedido vira \"perdido\". Sem resposta, o ritmo padrão é de 3 tentativas, a próxima em 1, 2 e 3 dias. Na última, o sistema pergunta se você encerra como \"Sem retorno do cliente\" ou continua."
          },
          {
            "tipo": "conteudo",
            "titulo": "Instituições públicas pedem mais paciência",
            "texto": "Em instituições públicas, como prefeituras e a Polícia Militar, quem decide costuma ter muitas tarefas. Por isso o sistema permite até 6 tentativas, com intervalos maiores (3, 7, 7, 14, 14 dias). Registre também quem decide no órgão, com nome e setor. Assim o próximo contato fala com a pessoa certa. A cobrança de aprovação de arte também usa um ritmo mais longo para instituições."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "negociacao",
            "pergunta": "Você falou com uma prefeitura 3 vezes e não teve resposta. O que o ritmo do sistema indica?",
            "opcoes": [
              "Encerrar como \"Sem retorno do cliente\", como em qualquer cliente.",
              "Marcar o pedido como perdido por achar caro.",
              "Continuar com os intervalos maiores (até 6 tentativas) e registrar quem decide no órgão.",
              "Ligar todos os dias até atender."
            ],
            "correta": 2,
            "feedbackCerto": "Certo. Instituições têm ritmo próprio, com intervalos maiores. Registrar quem decide ajuda o próximo contato.",
            "feedbackPorOpcao": [
              "Para instituições o ritmo é outro, com até 6 tentativas. Tente de novo.",
              "Ninguém falou em preço. Esse motivo seria inventado. Tente de novo.",
              null,
              "Insistir todo dia foge do ritmo e pressiona quem decide. Tente de novo."
            ],
            "erroCriticoOpcoes": [
              1
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "negociacao",
            "pergunta": "O cliente recebeu o orçamento há 3 dias e não respondeu. Qual é o melhor follow-up?",
            "opcoes": [
              "\"O orçamento vence hoje. Feche agora ou perde o preço.\"",
              "\"Olá! Passando para saber se ficou alguma dúvida sobre o orçamento. Posso ajudar em algo?\"",
              "\"Como você não respondeu, baixei o preço.\"",
              "\"Vai querer ou não?\""
            ],
            "correta": 1,
            "feedbackCerto": "Certo. A mensagem lembra o orçamento, oferece ajuda e não pressiona.",
            "feedbackErrado": "O bom follow-up lembra o orçamento e oferece ajuda. Não pressione, não invente urgência e não dê desconto automático."
          },
          {
            "tipo": "conteudo",
            "titulo": "Prospecção",
            "texto": "Prospecção é procurar novos clientes. O Comercial também faz isso. Escolas, unidades militares, empresas, restaurantes, eventos, clubes, lojas e instituições podem precisar do que a Valente faz. A abordagem deve ter um motivo e fazer sentido para aquele contato."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "prospeccao",
            "pergunta": "Você vai fazer o primeiro contato com uma escola. Qual é a melhor abordagem?",
            "opcoes": [
              "\"Oi. Vocês querem comprar miniaturas?\"",
              "\"Olá! Estamos com promoção só hoje. Fechem agora.\"",
              "\"Olá! Segue nossa tabela de preços.\"",
              "\"Olá! Sou da Valente Artes, estúdio de impressão 3D. Fazemos peças personalizadas que podem servir para os eventos da escola. Podemos conversar?\""
            ],
            "correta": 3,
            "feedbackCerto": "Certo. A mensagem se apresenta, diz o motivo, mostra a utilidade e convida para conversar.",
            "feedbackErrado": "A boa abordagem tem apresentação curta, motivo do contato, utilidade para a pessoa e convite para conversar."
          },
          {
            "tipo": "missao",
            "competencia": "prospeccao",
            "titulo": "Missão",
            "objetivo": "Analisar contatos de treino, escolher os melhores e praticar negociação sem desconto automático.",
            "contexto": "Cinco contatos de mentira.",
            "tarefas": [
              "Analise os 5 e escolha os dois com mais chance de venda. Prepare a abordagem para eles.",
              "Para um deles, imagine que o cliente achou caro e conduza sem desconto automático."
            ],
            "criterioConclusao": "Ter escolhido os 2 contatos, preparado a abordagem e treinado a objeção antes de marcar como concluída."
          }
        ]
      },
      {
        "dia": 10,
        "titulo": "Missão Comercial Valente",
        "subtitulo": "Mostrar que você consegue usar as ferramentas e o que aprendeu na trilha em um caso completo",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Como funciona",
            "texto": "Este dia não traz conteúdo novo importante. Ele verifica se você consegue juntar tudo: consulta ao sistema, tipo de pedido, coleta de dados, orçamento e proposta, negociação, registro, liberação e acompanhamento."
          },
          {
            "tipo": "cenario",
            "competencia": "atendimento",
            "titulo": "Atendimento completo",
            "noInicial": "a",
            "nos": {
              "a": {
                "cliente": "Olá. Vi vocês no Instagram. Minha empresa fará um evento e precisamos de miniaturas personalizadas. Vocês fazem?",
                "opcoes": [
                  {
                    "label": "\"R$70 cada.\"",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Você deu preço sem saber nada sobre o pedido. Isso é erro crítico.",
                    "proximo": "b"
                  },
                  {
                    "label": "\"Fazemos trabalhos personalizados. Me conta um pouco mais: o que vocês imaginam e quantas unidades precisam?\"",
                    "correta": true,
                    "feedback": "Certo. Você usou o atendimento aprendido no Dia 5.",
                    "proximo": "b"
                  },
                  {
                    "label": "\"Mande o pagamento.\"",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Pedir pagamento antes de entender o pedido é erro crítico.",
                    "proximo": "b"
                  },
                  {
                    "label": "\"Só com STL.\"",
                    "correta": false,
                    "feedback": "Recusar de cara, sem perguntar, perde uma chance real de venda.",
                    "proximo": "b"
                  }
                ]
              },
              "b": {
                "cliente": "Seriam 100 miniaturas da nossa equipe. Tenho apenas algumas fotos. Pensamos em 10 cm, pintadas. O evento é daqui a 12 dias.",
                "opcoes": [
                  {
                    "label": "\"Já temos tudo e podemos prometer.\"",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Prometer sem orçamento e sem verificar a capacidade é erro crítico.",
                    "proximo": "c"
                  },
                  {
                    "label": "\"É um projeto a partir de fotos e pode precisar de modelagem. Quantidade, acabamento e prazo pedem orçamento e verificação de capacidade.\"",
                    "correta": true,
                    "feedback": "Certo. A resposta junta os Dias 3 e 4.",
                    "proximo": "c"
                  },
                  {
                    "label": "\"Foto é a mesma coisa que STL.\"",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Foto não é arquivo 3D. Essa frase está errada.",
                    "proximo": "c"
                  },
                  {
                    "label": "\"Basta multiplicar um preço unitário por 100.\"",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Produzir muitas peças muda o custo de cada uma. Multiplicar direto é erro crítico.",
                    "proximo": "c"
                  }
                ]
              },
              "c": {
                "cliente": "Se eu fizer 300, consegue melhorar o preço?",
                "opcoes": [
                  {
                    "label": "\"Sim, 20%.\"",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Prometer uma porcentagem de desconto sem consultar é erro crítico.",
                    "proximo": "d"
                  },
                  {
                    "label": "\"Quantidade maior pode mudar a condição, mas preciso recalcular e consultar antes de confirmar.\"",
                    "correta": true,
                    "feedback": "Certo. Não promete desconto fora da autonomia.",
                    "proximo": "d"
                  },
                  {
                    "label": "\"O preço nunca muda.\"",
                    "correta": false,
                    "feedback": "Essa frase fecha uma negociação que talvez pudesse avançar.",
                    "proximo": "d"
                  },
                  {
                    "label": "\"Faço metade.\"",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Prometer 50% de desconto sem nenhuma análise é erro crítico grave.",
                    "proximo": "d"
                  }
                ]
              },
              "d": {
                "cliente": "Mas preciso em 5 dias.",
                "opcoes": [
                  {
                    "label": "\"Tranquilo.\"",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Prometer prazo sem verificar a capacidade é erro crítico.",
                    "proximo": "e"
                  },
                  {
                    "label": "\"Vou verificar a capacidade de produção antes de confirmar se dá para cumprir esse prazo.\"",
                    "correta": true,
                    "feedback": "Certo. O prazo precisa ser confirmado com a produção.",
                    "proximo": "e"
                  },
                  {
                    "label": "\"Impossível.\"",
                    "correta": false,
                    "feedback": "Recusar sem verificar a capacidade pode perder uma venda possível.",
                    "proximo": "e"
                  },
                  {
                    "label": "\"Se pagar hoje, eu prometo o prazo.\"",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Prometer o prazo em troca de pagamento, sem verificar a capacidade, é erro crítico.",
                    "proximo": "e"
                  }
                ]
              },
              "e": {
                "cliente": "Posso pagar metade agora?",
                "opcoes": [
                  {
                    "label": "\"Sim, sempre 50%.\"",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Afirmar uma regra fixa sem confirmar é erro crítico. Essa condição precisa ser consultada."
                  },
                  {
                    "label": "\"Pode pagar 30%.\"",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Afirmar uma porcentagem sem confirmar a regra atual é erro crítico."
                  },
                  {
                    "label": "\"Vou confirmar a condição que vale para o pedido e te explico entrada e saldo corretamente.\"",
                    "correta": true,
                    "feedback": "Certo. Não inventa regra de pagamento."
                  },
                  {
                    "label": "\"Só pagamento total.\"",
                    "correta": false,
                    "feedback": "Essa frase pode nem ser verdade e fecha uma forma de pagamento sem necessidade."
                  }
                ]
              }
            }
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "atendimento",
            "pergunta": "Depois dessa conversa, você monta o resumo do atendimento. Qual resumo está certo?",
            "opcoes": [
              "Projeto com STL do cliente. 100 miniaturas de 10 cm, pintadas. Prazo pedido de 5 dias. Próximo passo: fazer o orçamento.",
              "Projeto a partir de fotos, precisa de modelagem. 100 miniaturas de 10 cm, pintadas (perguntou sobre 300). Prazo pedido de 5 dias, a verificar. Pagamento a confirmar. Próximo passo: fazer o orçamento e verificar a capacidade.",
              "Projeto a partir de fotos. 300 miniaturas de 10 cm, pintadas. Prazo de 5 dias confirmado. Entrada de 50%. Próximo passo: liberar a produção.",
              "Empresa quer miniaturas personalizadas para um evento. Aguardar o cliente voltar a falar."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. O resumo usa só o que o cliente disse, não inventa prazo nem condição e mostra o próximo passo.",
            "feedbackErrado": "O resumo certo usa só o que apareceu na conversa. Ele não trata como confirmado o preço, o prazo ou o pagamento, e diz qual é o próximo passo."
          },
          {
            "tipo": "missao",
            "competencia": "operacao_os",
            "titulo": "Missão operacional",
            "objetivo": "Ligar cada ação à ferramenta certa do Valente OS e explicar o próximo passo ao cliente.",
            "contexto": "Ações: consultar produto existente, calcular o custo, montar a proposta para o cliente, registrar pedido, consultar pagamento, acompanhar produção, ver suas tarefas de contato e aprovação.",
            "tarefas": [
              "Diga em qual ferramenta você faria cada uma dessas ações.",
              "Diga como você explicaria ao cliente o próximo passo."
            ],
            "criterioConclusao": "Ter ligado as ações às ferramentas e dito o próximo passo antes de marcar como concluída."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "operacao_os",
            "pergunta": "Qual opção liga cada ação à ferramenta certa?",
            "opcoes": [
              "Produto existente em Peças Próprias. Custo em Orçamento. Proposta ao cliente em Propostas. Pedido e status em Pedidos. Pagamento em Caixa. Contatos e aprovações em Tarefas.",
              "Tudo em Caixa.",
              "Tudo em Pedidos.",
              "Produto em Orçamento. Pagamento em Peças Próprias."
            ],
            "correta": 0,
            "feedbackCerto": "Certo. A missão fecha o que você começou a ver no Dia 1.",
            "feedbackPorOpcao": [
              null,
              "Cada ferramenta serve para uma coisa. Não é tudo no mesmo lugar. Tente de novo.",
              "Cada ferramenta serve para uma coisa. Não é tudo no mesmo lugar. Tente de novo.",
              "Essas ligações estão trocadas. Reveja o Dia 1."
            ]
          },
          {
            "tipo": "conteudo",
            "titulo": "Parabéns!",
            "texto": "Você concluiu a Formação Comercial Valente. A classificação final considera suas competências e os erros críticos ao longo dos 10 dias. Não é só uma contagem de respostas certas."
          }
        ]
      }
    ]
  },
  "modelagem_3d": {
    "id": "modelagem_3d",
    "nome": "Modelagem 3D",
    "descricao": "Aprenda a transformar um briefing em um modelo 3D pronto para imprimir, com escala, arquivos, conferência e entrega corretos.",
    "icone": "🗿",
    "versao": 3,
    "cargosPermitidos": null,
    "competencias": [
      "Organização do trabalho de modelagem",
      "Leitura de briefing e referências",
      "Escala e medidas",
      "Modelagem para fabricação",
      "Arquivos, versões e entrega",
      "Conferência e liberação"
    ],
    "criteriosConclusao": "Interpretar um pedido fictício, preparar e conferir um arquivo de exemplo e explicar quando pedir aprovação. O responsável verifica o resultado antes de autorizar trabalho independente.",
    "dias": [
      {
        "dia": 1,
        "titulo": "Minha estação de modelagem",
        "subtitulo": "Onde o trabalho começa e onde ele fica guardado",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O trabalho começa em uma tarefa, não em uma mensagem solta",
            "texto": "Modelar é transformar uma ideia em um objeto que pode ser impresso. Antes de abrir o programa de modelagem, saiba qual trabalho você vai fazer. Na Valente, a fonte oficial é o Valente OS. O pedido aparece na aba Pedidos (Kanban), na coluna Modelando. As tarefas chegam na aba Tarefas, com título, instruções, checklist (lista de conferência) e quantidade. Uma mensagem de WhatsApp só avisa que existe um trabalho. O que vale é o briefing oficial, que é a descrição do trabalho no sistema."
          },
          {
            "tipo": "conteudo",
            "titulo": "As partes da sua estação",
            "texto": "Sua estação de modelagem tem quatro partes. Primeira: o pedido ou a tarefa, que diz o que fazer. Segunda: as referências, que são fotos, desenhos, medidas e links do cliente. Terceira: o programa de modelagem e os arquivos de trabalho. Quarta: as pastas dos arquivos de entrada e de saída. Quando você sabe onde cada coisa fica, não perde tempo procurando. E não trabalha no arquivo errado."
          },
          {
            "tipo": "conteudo",
            "titulo": "Sua missão no topo da tarefa",
            "texto": "Ao abrir uma tarefa, você vê no topo a caixa SUA MISSÃO em destaque. Ela diz o que fazer e quanto falta. Leia essa caixa primeiro. Abaixo ficam o checklist e as fotos de referência. Os botões são Iniciar tarefa, Pausar, Retomar e Concluir tarefa. Seu PIN mostra ao sistema quem você é. Seu nome fica gravado como responsável nas tarefas que você inicia e conclui. No tablet, Minhas funções abre uma fila única com as tarefas da sua função. No computador, use a aba Tarefas."
          },
          {
            "tipo": "conteudo",
            "titulo": "O perigo das versões",
            "texto": "Imagine uma pasta com dois arquivos do mesmo capacete, um antigo e um novo. Se você abrir o que parece certo sem conferir, pode perder horas na versão errada. O certo é confirmar, no pedido ou na tarefa, qual é o trabalho e qual é a versão que vale. Só depois abra o arquivo. Siga os nomes de arquivo e as pastas definidos pela Valente. Não sabe qual é a regra? Pergunte ao responsável. Não adivinhe."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "organizacao_trabalho",
            "cliente": "Colega da produção: \"Ei, o cliente mandou um áudio. Ele quer o capacete maior. Já vai mexendo no arquivo que está na pasta. Depois a gente vê o pedido.\"",
            "opcoes": [
              {
                "label": "Começo pelo arquivo da pasta. Confiro o pedido no final, quando terminar.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Se o arquivo ou o pedido forem diferentes do que você pensa, você pode perder o trabalho todo."
              },
              {
                "label": "Antes de mexer, abro o pedido e a tarefa no Valente OS. Confirmo o trabalho e a versão que vale. Registro no pedido o que o cliente pediu.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. O áudio é só um aviso. O briefing oficial e a versão do arquivo se confirmam na fonte."
              },
              {
                "label": "Peço ao cliente outro arquivo novo e uso esse, sem olhar o pedido.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Você deixa de usar a fonte oficial. E cria mais uma versão solta no caminho."
              },
              {
                "label": "Aumento o capacete por conta própria, no tamanho que eu achar bom.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Isso é inventar uma medida. Se falta informação, consulte a fonte e o responsável."
              }
            ]
          },
          {
            "tipo": "ordenar",
            "competencia": "organizacao_trabalho",
            "instrucao": "Coloque na ordem certa os passos para começar um trabalho de modelagem.",
            "itens": [
              "Abrir o pedido ou a tarefa no Valente OS",
              "Ler as instruções, o checklist e a quantidade",
              "Achar as referências do trabalho",
              "Confirmar a versão que vale e a pasta de saída",
              "Só então abrir o programa e começar a modelar"
            ],
            "feedbackCerto": "Isso mesmo. Primeiro a fonte oficial, depois as referências e a versão, por último o programa.",
            "feedbackErrado": "A ordem certa começa pelo pedido ou pela tarefa. Depois vêm as referências e a versão. Só no fim você abre o programa."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "organizacao_trabalho",
            "local": "No computador: Valente OS > Pedidos (Kanban) e aba Tarefas",
            "instrucao": "Só olhe, não mude nada. Ache um pedido na coluna Modelando e a tarefa dele. Veja a caixa SUA MISSÃO, o título, as instruções, o checklist e a quantidade. Depois descubra onde ficam as referências e a pasta de saída. Se não souber a regra oficial de pastas e nomes de arquivo, anote a dúvida e pergunte ao responsável. Marque como feito só depois de achar tudo de verdade."
          }
        ]
      },
      {
        "dia": 2,
        "titulo": "Entendendo o pedido",
        "subtitulo": "O briefing é o combinado técnico do que você vai construir",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Tipos de pedido",
            "texto": "Os pedidos de modelagem não são todos iguais. Pode ser um produto novo, criado do zero. Pode ser a alteração de um modelo que já existe. Pode ser a reprodução de algo que o cliente trouxe como referência. Pode ser uma personalização, como incluir um nome ou trocar um acessório. Pode ser um ajuste de escala, para deixar a peça maior ou menor. Ou pode ser só preparar um modelo pronto para a fabricação. Cada tipo pede perguntas diferentes."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que o briefing precisa responder",
            "texto": "O briefing é a descrição do que o cliente quer. Ele é o combinado técnico do que você vai construir. O briefing precisa responder três coisas. A finalidade: a peça vai ficar exposta, vai ser pintada ou vai ser usada no dia a dia? O tamanho final: altura ou largura, em milímetros ou centímetros. O nível de detalhe: rosto marcado, textura de armadura, detalhes finos. Sem essas respostas, você modela no escuro."
          },
          {
            "tipo": "conteudo",
            "titulo": "Quando o pedido não está claro",
            "texto": "Imagine o pedido: \"faça igual à foto\". Se só existe uma foto, ela mostra um lado e esconde o resto. Você precisa separar o que a referência mostra do que ela não mostra. Quando o pedido tiver mais de um sentido, não escolha um sentido em silêncio. Registre a dúvida no pedido ou na tarefa e consulte o responsável. Dizer \"não sei\" e perguntar não é erro. Inventar é erro."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "leitura_briefing",
            "pergunta": "O pedido diz: \"Quero o meu personagem do jogo, mas com a espada na outra mão\". Que tipo de pedido é esse?",
            "opcoes": [
              "Personalização ou alteração em cima de uma reprodução. Existe um modelo base e uma mudança pedida. É preciso confirmar o que muda e o que fica igual.",
              "Produto novo, porque o cliente pediu algo diferente do original.",
              "Só ajuste de escala, porque o tamanho é o que mais costuma mudar.",
              "Preparação para fabricação, porque o modelo já existe."
            ],
            "correta": 0,
            "feedbackCerto": "Certo. Saber o tipo de pedido mostra as perguntas certas: qual é o personagem base, de onde vêm as referências e o que muda.",
            "feedbackPorOpcao": [
              null,
              "Existe um personagem de referência. Se você tratar como produto novo, ignora o que já está definido.",
              "O pedido não fala de tamanho. A mudança é na pose e no acessório.",
              "Não sabemos se o modelo já existe pronto. E mudar a pose não é só preparação."
            ]
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "leitura_briefing",
            "pergunta": "O briefing chegou só com a frase \"faça a miniatura do dragão da foto\". O que você ainda precisa confirmar antes de modelar?",
            "itens": [
              "Tamanho final desejado",
              "Finalidade da peça (exposição, pintura, uso)",
              "Como são as costas e a cauda, que não aparecem na foto",
              "Qual é a sua cor preferida para o dragão",
              "Nível de detalhe esperado nas escamas"
            ],
            "corretos": [
              0,
              1,
              2,
              4
            ],
            "feedbackCerto": "Isso mesmo. Tamanho, finalidade, partes que não aparecem e nível de detalhe fazem parte do briefing.",
            "feedbackErrado": "Faltou algum item ou sobrou um. A sua cor preferida não faz parte do briefing. Tamanho, finalidade, partes que não aparecem e nível de detalhe fazem."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "leitura_briefing",
            "pergunta": "O pedido diz: \"Faça um busto do meu avô, igual à foto\". Só veio uma foto de frente. O que você faz antes de modelar?",
            "opcoes": [
              "Modelo o lado e as costas da cabeça do jeito que eu imaginar.",
              "Escolho um tamanho comum de busto e começo a modelar.",
              "Registro as dúvidas (tamanho, lado e costas, finalidade e nível de detalhe) e consulto o responsável.",
              "Peço mais fotos direto ao cliente pelo WhatsApp, sem registrar nada."
            ],
            "correta": 2,
            "feedbackCerto": "Certo. A foto de frente não mostra o lado nem as costas. O que falta se registra e se pergunta.",
            "feedbackErrado": "Não invente o que a foto não mostra. Registre as dúvidas de tamanho, lado e costas, finalidade e nível de detalhe. Depois consulte o responsável."
          }
        ]
      },
      {
        "dia": 3,
        "titulo": "Referências e briefing",
        "subtitulo": "Referência suficiente, incompleta ou contraditória",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que é referência suficiente",
            "texto": "Referência suficiente é a que deixa você decidir sem inventar partes importantes da peça. Costumam ajudar: fotos de vários ângulos (frente, lado, costas e topo), medidas conhecidas, desenhos em vista ortogonal (a peça desenhada reta, sem perspectiva) e fotos de detalhes, como mãos, rosto e acessórios. Quanto mais vistas, menos você precisa adivinhar. Não existe número mágico de fotos. O que importa é conseguir responder o que o briefing pede."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que a foto não mostra",
            "texto": "Uma foto de frente pode mostrar bem o rosto. Mas ela não mostra as costas, a espessura nem os acessórios dos lados. O que não aparece não é fato. Se você completar essas partes com a imaginação e o cliente esperava outra coisa, você e o próximo setor vão ter que refazer o trabalho. O certo é listar o que falta e pedir ao responsável. Ele pode falar com o cliente."
          },
          {
            "tipo": "conteudo",
            "titulo": "Referências que não combinam",
            "texto": "Às vezes duas referências não combinam. Uma foto mostra o personagem com capa e a outra mostra sem capa. Ou a medida escrita no pedido não bate com a proporção da imagem. Isso é uma contradição. Resolva a contradição antes de gastar horas no modelo final. Registre a contradição no pedido, aponte as duas fontes e espere a decisão do responsável."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "leitura_briefing",
            "pergunta": "Você tem duas imagens do mesmo cavaleiro. Na primeira, ele tem um escudo no braço esquerdo. Na segunda, não tem. O que você faz?",
            "opcoes": [
              "Modelo com escudo. Uma imagem mostra o escudo e é mais seguro incluir.",
              "Modelo sem escudo, porque é mais fácil e rápido de imprimir.",
              "Registro a contradição no pedido, aponto as imagens que não combinam e peço a decisão do responsável antes de fechar o modelo.",
              "Modelo as duas versões e entrego as duas sem avisar nada."
            ],
            "correta": 2,
            "feedbackCerto": "Certo. Contradição se resolve na fonte, antes de gastar tempo no modelo final.",
            "feedbackPorOpcao": [
              "Você escolheu um sentido em silêncio. Se o cliente não queria o escudo, o trabalho vai ser refeito.",
              "O que é mais fácil de produzir não define o que o cliente pediu.",
              null,
              "Você dobra o trabalho e deixa a decisão para o próximo setor, sem registro."
            ],
            "erroCriticoOpcoes": [
              0
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "leitura_briefing",
            "afirmacao": "Se a foto de frente mostra bem o rosto, você já pode considerar definidas as costas e os acessórios dos lados da peça.",
            "correta": false,
            "feedbackCerto": "Certo. O que não aparece na referência não é fato. Deve entrar na lista do que falta.",
            "feedbackErrado": "É falso. Uma vista só define o que aparece nela. Costas, espessura e laterais continuam em aberto. Você precisa perguntar."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "leitura_briefing",
            "pergunta": "O pedido traz 1 foto de frente de um robô e a medida \"20 cm\". A descrição diz \"antena no topo\", mas a foto mostra a cabeça sem antena. Como você classifica essas referências e o que faz?",
            "opcoes": [
              "Contraditórias e incompletas. Peço as vistas de lado e de costas e resolvo a antena com o responsável.",
              "Suficientes. Tem foto e medida, então já posso modelar.",
              "Só incompletas. Faço a antena, porque está escrito na descrição.",
              "Só contraditórias. Sigo a foto e modelo o robô sem antena."
            ],
            "correta": 0,
            "feedbackCerto": "Certo. A antena é uma contradição e só há uma vista. Você pede o que falta e não completa por suposição.",
            "feedbackErrado": "As referências são contraditórias, por causa da antena, e incompletas, porque só há uma vista. Peça as vistas de lado e de costas e resolva a antena com o responsável. Não complete por suposição."
          }
        ]
      },
      {
        "dia": 4,
        "titulo": "Escala e medidas",
        "subtitulo": "O mesmo desenho se comporta diferente em cada tamanho",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "A escala muda tudo",
            "texto": "Escala é o tamanho final do objeto em relação ao modelo original. Quando você reduz uma figura, tudo diminui junto: braços, dedos, espadas, textura. Uma peça que funciona bem com 30 cm pode não funcionar com 5 cm. Os detalhes finos podem sumir na impressão. As partes finas ficam frágeis. Os encaixes ficam apertados demais. Por isso, decida o tamanho final antes de caprichar nos detalhes."
          },
          {
            "tipo": "conteudo",
            "titulo": "Espessura mínima e detalhes",
            "texto": "Toda impressora 3D tem um limite do que consegue imprimir. Paredes e hastes muito finas podem falhar, quebrar na mão ou nem se formar. O mínimo depende do processo (resina ou FDM, que é a impressão com filamento) e do material. Como regra geral, evite partes finas demais para o tamanho final e engrosse o que for frágil. Consulte a produção para saber os valores mínimos que a Valente usa em cada processo. Não use números de cabeça."
          },
          {
            "tipo": "conteudo",
            "titulo": "Tolerância em encaixes",
            "texto": "Quando uma peça encaixa em outra, como um braço no ombro, o furo precisa ser um pouco maior que o pino. Essa folga se chama tolerância. Sem folga, a peça impressa pode não montar, porque a impressão nunca sai perfeita. Com folga demais, a peça fica solta. O valor certo depende do processo e segue o padrão da Valente. Se não houver padrão escrito, consulte a produção. Se possível, peça um teste de encaixe."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "escala_medidas",
            "pergunta": "Você modelou uma figura com uma espada bem fina, pensando em 30 cm. O cliente pediu a figura com 5 cm de altura. O que você deve fazer?",
            "opcoes": [
              "Só reduzir tudo na mesma proporção, porque o desenho é o mesmo.",
              "Deixar a espada como está e avisar que, se quebrar, o problema é da impressão.",
              "Tirar a espada para não ter risco, sem avisar ninguém.",
              "Rever a espada no tamanho final. Ela pode ficar frágil ou sumir. Avalio engrossar a espada e confirmo os mínimos com a produção."
            ],
            "correta": 3,
            "feedbackCerto": "Certo. Pense na escala final antes de fechar o detalhe. E confirme os mínimos com a produção.",
            "feedbackPorOpcao": [
              "Reduzir a escala não reduz o problema. A espada fica ainda mais fina e frágil.",
              "Você entregou um risco que dava para prever, sem tentar evitar.",
              "Tirar uma parte do pedido é mudar o combinado sem consultar.",
              null
            ],
            "erroCriticoOpcoes": [
              1,
              2
            ]
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "escala_medidas",
            "cliente": "Colega da pintura: \"Você sabe qual é a espessura mínima que a gente pode usar nessa miniatura? Preciso saber para o meu modelo.\"",
            "opcoes": [
              {
                "label": "É sempre 1 mm. Pode usar em qualquer peça.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Inventar um número é arriscado. O mínimo depende do processo e do material."
              },
              {
                "label": "Não tenho esse número documentado. Vou consultar a produção ou o responsável e usar o padrão da Valente.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. Dizer que não sabe e consultar a fonte é o esperado. O número oficial vem da Valente."
              },
              {
                "label": "Qualquer espessura serve. A impressora resolve.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Impressoras têm limites. Partes finas demais falham ou quebram."
              },
              {
                "label": "Deixa fino mesmo. A gente vê na impressão se quebra.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Isso desperdiça tempo e material da produção."
              }
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "escala_medidas",
            "local": "Conversa com o responsável da produção, na bancada de produção",
            "instrucao": "Pergunte a um responsável da produção quais são os padrões de espessura mínima e de tolerância de encaixe em cada processo. Se existir documento oficial, anote onde ele fica. Se não existir, anote isso e combine como agir nesses casos. Marque como feito só depois de fazer a consulta de verdade."
          }
        ]
      },
      {
        "dia": 5,
        "titulo": "Modelar para fabricar",
        "subtitulo": "Um modelo bonito na tela também precisa funcionar como objeto",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Malha fechada",
            "texto": "Uma renderização bonita (a imagem pronta do modelo na tela) não quer dizer boa impressão. O fatiador é o programa que prepara o arquivo para a impressora. Para ele, o modelo precisa ser um sólido fechado, como um balão sem furos. Isso se chama malha fechada ou watertight. Buracos na superfície, faces invertidas (viradas ao contrário), partes que se atravessam ou superfícies sem espessura confundem o programa e causam falhas. Antes de entregar, confira a malha com as ferramentas do seu programa."
          },
          {
            "tipo": "conteudo",
            "titulo": "Divisão de peças e pintura",
            "texto": "Dividir uma figura em partes pode facilitar a impressão e a pintura. Com braços, cabeça e acessórios separados, o pincel alcança as áreas difíceis. E a peça pode precisar de menos suporte. Mas cada divisão pede um encaixe bem pensado, com tolerância. Decida a divisão pensando em quem imprime, em quem pinta e em quem monta. Registre como as peças se juntam."
          },
          {
            "tipo": "conteudo",
            "titulo": "Suportes e orientação",
            "texto": "Suportes são pequenas estruturas temporárias. Eles seguram partes que ficariam no ar durante a impressão, como braços levantados ou a ponta de uma espada. Orientação é o ângulo em que a peça fica na plataforma da impressora. A orientação e o suporte mudam o acabamento e a quantidade de trabalho depois da impressão. Como modelador, reduza os problemas que dá para prever: evite partes longas demais sem apoio, deixe áreas planas de apoio e pense onde o suporte vai marcar. A configuração final de impressão segue a regra da Valente."
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "modelagem_fabricacao",
            "pergunta": "Quais destes itens são riscos reais de fabricação em uma figura de guerreiro?",
            "itens": [
              "Lança muito fina, que pode quebrar na mão",
              "Braço levantado sem apoio, que pode precisar de suporte",
              "Fendas ou buracos na malha do modelo",
              "Cor do uniforme que você acha mais bonita",
              "Peças divididas sem encaixe ou com encaixe sem folga"
            ],
            "corretos": [
              0,
              1,
              2,
              4
            ],
            "feedbackCerto": "Isso mesmo. Peça frágil, parte sem apoio, malha aberta e encaixe ruim são riscos que dá para prever. Gosto pessoal não é risco de fabricação.",
            "feedbackErrado": "Você deixou passar um risco ou marcou algo que não é risco. Peça frágil, parte sem apoio, malha aberta e encaixe ruim são riscos de fabricação."
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "modelagem_fabricacao",
            "afirmacao": "Se o modelo parece perfeito na renderização, você pode entregar para impressão sem conferir se a malha é fechada.",
            "correta": false,
            "feedbackCerto": "Certo. A aparência na tela não prova que a malha está boa. Ela precisa ser conferida.",
            "feedbackErrado": "É falso. Um modelo bonito pode ter buracos ou faces invertidas. Eles só aparecem no fatiador ou na impressão."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "modelagem_fabricacao",
            "pergunta": "Você recebeu o modelo de um mago. O cajado é muito fino, os braços estão abertos para os lados e a capa está solta no ar. O que você faz antes de liberar?",
            "opcoes": [
              "Libero como está. Se alguma parte quebrar, a impressão resolve.",
              "Tiro o cajado e a capa do modelo, para não ter risco.",
              "Engrosso o cajado com a medida que eu acho boa e libero.",
              "Engrosso o cajado, penso em apoio ou suporte para os braços e a capa, avalio dividir as peças e confirmo os mínimos com a produção."
            ],
            "correta": 3,
            "feedbackCerto": "Certo. Você viu a parte frágil e as partes sem apoio, pensou na divisão das peças e consultou a produção.",
            "feedbackErrado": "O cajado fino pode quebrar. Os braços e a capa ficam sem apoio. Engrosse o cajado, pense em apoio ou suporte, avalie dividir as peças com bons encaixes e confirme os mínimos com a produção."
          }
        ]
      },
      {
        "dia": 6,
        "titulo": "Preparação do arquivo",
        "subtitulo": "Exportar é entregar o modelo aprovado, não é só salvar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O arquivo STL",
            "texto": "O formato de arquivo mais usado na impressão 3D é o STL. Ele guarda só a forma do objeto, feita de pequenos triângulos. Ele não guarda cores nem unidades de medida. Por isso, o tamanho só sai certo se a escala e a unidade de exportação (milímetros, por exemplo) estiverem certas. Um modelo pode estar perfeito na tela e sair 10 vezes menor ou maior no arquivo exportado. Confira sempre as dimensões depois de exportar."
          },
          {
            "tipo": "conteudo",
            "titulo": "Nome, versão e peças",
            "texto": "Todo arquivo precisa ser fácil de identificar. O nome deve dizer qual é a peça e qual é a versão. Assim ninguém precisa adivinhar. Imagine achar soldado.stl, soldado_final.stl e soldado_final2.stl. Qual usar? A produção não deveria ter que decidir. Se o conjunto tem várias peças, identifique cada uma e não esqueça nenhuma. Use o padrão oficial de nomes da Valente, quando houver. Se não souber qual é, consulte o responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "Exportar é uma etapa de qualidade",
            "texto": "Exportar não é só clicar em salvar. O arquivo entregue precisa ser igual ao modelo aprovado e servir para o processo esperado. Antes de exportar, confirme qual versão do modelo está aberta. Depois de exportar, abra o arquivo de novo ou confira no visualizador. Veja se todas as peças estão lá, se a escala está certa e se o nome está claro. Guarde o arquivo na pasta de saída do trabalho, não em uma pasta qualquer do computador."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "organizacao_versoes",
            "pergunta": "Na pasta de saída estão soldado.stl, soldado_final.stl e soldado_final2.stl. O pedido não diz qual é o que vale. O que você faz?",
            "opcoes": [
              "Não escolho pelo nome. Confiro no pedido ou na tarefa e com o responsável qual é o aprovado. Depois organizo a pasta conforme o padrão.",
              "Uso o soldado_final2.stl, porque o número maior deve ser o mais novo.",
              "Uso o primeiro, soldado.stl, porque é o original.",
              "Exporto um arquivo novo chamado soldado_final3.stl para resolver."
            ],
            "correta": 0,
            "feedbackCerto": "Certo. Na dúvida sobre a versão, quem decide é a fonte oficial e o responsável, não o nome do arquivo.",
            "feedbackPorOpcao": [
              null,
              "O nome não prova qual é a versão. Você pode estar usando o arquivo errado.",
              "Pode ser a versão mais antiga, não a aprovada.",
              "Você cria mais uma versão solta e aumenta a confusão."
            ],
            "erroCriticoOpcoes": [
              1,
              2
            ]
          },
          {
            "tipo": "ordenar",
            "competencia": "organizacao_versoes",
            "instrucao": "Coloque na ordem certa os passos de uma exportação segura.",
            "itens": [
              "Confirmar no pedido ou na tarefa qual versão do modelo está aprovada",
              "Conferir escala, unidade e se todas as peças estão no conjunto",
              "Exportar o STL com o nome no padrão oficial",
              "Abrir de novo o arquivo exportado para conferir dimensões e peças",
              "Guardar o arquivo na pasta de saída do trabalho"
            ],
            "feedbackCerto": "Ordem certa: confirmar a versão, preparar, exportar, conferir o resultado e guardar no lugar certo.",
            "feedbackErrado": "Primeiro confirme a versão e prepare o modelo. Depois exporte, confira o arquivo gerado e guarde na pasta de saída."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "organizacao_versoes",
            "local": "Programa de modelagem e pasta de saída do trabalho de treino",
            "instrucao": "Use um modelo de treino, não um trabalho real em andamento. Exporte um STL e abra o arquivo de novo. Confira dimensões, peças e nome. Se existir padrão oficial de nomes da Valente, use. Se não souber qual é, consulte o responsável. Marque como feito só depois de conferir o arquivo exportado."
          }
        ]
      },
      {
        "dia": 7,
        "titulo": "Conferência antes de liberar",
        "subtitulo": "Conferir antes de gastar tempo e material",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Por que conferir antes",
            "texto": "Confira antes de liberar. Depois que a impressão começa, a máquina já está gastando tempo e material. Corrigir um erro no arquivo leva minutos. Corrigir depois de uma impressão perdida custa horas, resina ou filamento e prazo. Um modelo pode parecer certo na tela e ter sido exportado na escala errada. Uma peça do conjunto pode ter sido esquecida. A conferência serve para pegar esses casos."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que conferir",
            "texto": "Confira seis pontos. Tamanho: as dimensões finais batem com o briefing (a descrição do pedido)? Malha: está fechada, sem buracos? Peças: todas as peças do conjunto estão lá? Versão: é a aprovada? Encaixes: têm a folga certa? Informações de produção: a quantidade, as observações e a orientação sugerida estão registradas? Use o checklist de liberação da Valente, quando existir."
          },
          {
            "tipo": "checklist",
            "titulo": "Checklist de liberação (modelo geral)",
            "itens": [
              "Dimensões finais conferidas com o briefing",
              "Malha fechada, sem buracos e sem faces invertidas",
              "Todas as peças do conjunto presentes",
              "Versão confirmada como a aprovada",
              "Encaixes com folga e partes frágeis revisadas",
              "Quantidade e observações de produção registradas"
            ]
          },
          {
            "tipo": "conteudo",
            "titulo": "Quando você não consegue confirmar um item",
            "texto": "Se você não conseguir confirmar um item importante, não marque como liberado. Marcar como liberado sem conferir é erro crítico, porque empurra o problema para o próximo setor. Diga o que falta, registre no pedido ou na tarefa e peça ajuda ao responsável. Lembre: nas competências práticas, o responsável precisa validar antes do status Liberado."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "conferencia_liberacao",
            "cliente": "Colega da impressão, com pressa: \"Esse arquivo já está pronto, né? Só falta você marcar como liberado. Não deu tempo de abrir o modelo, mas deve estar bom.\"",
            "opcoes": [
              {
                "label": "Libero, porque é quase certo que está bom e o prazo é curto.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Liberar sem conferir é erro crítico. O problema vai aparecer na impressão."
              },
              {
                "label": "Libero e peço para você conferir a escala na hora de imprimir.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Você está passando para o próximo setor uma conferência que é sua."
              },
              {
                "label": "Marco como liberado e confiro depois, se der tempo.",
                "correta": false,
                "erroCritico": true,
                "feedback": "A conferência vem antes, não depois."
              },
              {
                "label": "Ainda não posso liberar. Vou conferir tamanho, malha, peças e versão agora. Se eu não conseguir confirmar algum item, registro e aviso o responsável.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. Sem conferência, não tem liberação."
              }
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "conferencia_liberacao",
            "afirmacao": "Se o modelo parece certo no programa de modelagem, você não precisa conferir a escala.",
            "correta": false,
            "feedbackCerto": "Certo. A escala pode estar errada mesmo com o visual certo. Por isso, confira as dimensões.",
            "feedbackErrado": "É falso. Um modelo pode parecer certo na tela e ter sido exportado na escala errada."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "conferencia_liberacao",
            "local": "Programa de modelagem, com um modelo de treino",
            "instrucao": "Com um modelo de treino, siga o checklist de liberação item por item. Confira de verdade: meça as dimensões, procure buracos na malha e conte as peças. Se não conseguir confirmar algum item, anote e não considere o modelo liberado. Marque como feito só depois de terminar a conferência."
          }
        ]
      },
      {
        "dia": 8,
        "titulo": "Correções e alterações",
        "subtitulo": "Erro, revisão e alteração solicitada são coisas diferentes",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Três situações diferentes",
            "texto": "Erro é o que não atende ao que já estava definido. Exemplo: o briefing (a descrição do pedido) pedia escudo e o arquivo entregue ficou sem escudo. Revisão é um ajuste normal do processo, como melhorar um detalhe que ainda estava em trabalho. Alteração solicitada é uma mudança no que foi combinado ou decidido antes. Exemplo: o cliente aprova o capacete A e depois pede o capacete B."
          },
          {
            "tipo": "conteudo",
            "titulo": "Por que separar",
            "texto": "Separar as três situações ajuda a registrar o histórico e a não perder versão. O erro costuma ser responsabilidade de quem produziu. Ele deve ser corrigido conforme o processo da Valente. A alteração solicitada pelo cliente muda o que foi combinado. Ela precisa ser registrada e levada ao responsável, porque pode mexer em orçamento, prazo ou aprovação. Não decida sozinho como tratar o custo. Siga o procedimento da Valente ou consulte o responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "Registrar nova versão",
            "texto": "Sempre que o modelo mudar, crie uma nova versão. Não salve por cima da antiga. Registre o motivo da mudança no pedido ou na tarefa. Assim o histórico fica guardado: dá para voltar ao que foi aprovado, saber quem mudou o quê e evitar que a produção use um arquivo antigo. Siga o padrão oficial de nomes de versão da Valente."
          },
          {
            "tipo": "conteudo",
            "titulo": "Quando o cliente pede ajuste na arte",
            "texto": "Antes da impressão, o comercial envia a arte da peça para o cliente aprovar. Isso é feito por uma tarefa chamada Aprovar arte. O cliente pode aprovar, pedir ajustes ou ainda não responder. Se ele pedir ajustes, o comercial descreve o que mudar. O sistema cria uma tarefa de Modelagem de ajuste, que chega para você. Isso conta mais uma rodada de aprovação. A impressão só é liberada quando a arte for aprovada. Isso é uma alteração solicitada. Leia a descrição do ajuste com atenção antes de mexer no modelo."
          },
          {
            "tipo": "conteudo",
            "titulo": "O ciclo do ajuste, passo a passo",
            "texto": "Enquanto você faz o ajuste, a tarefa Aprovar arte fica bloqueada. Quando você conclui a Modelagem de ajuste, ela volta sozinha para o comercial. O comercial envia a nova arte ao cliente. Por isso, faça o ajuste em uma nova versão do modelo, sem salvar por cima da anterior. E confira antes de concluir. Se a descrição do ajuste estiver confusa ou não combinar com as referências, registre a dúvida e consulte o responsável. Não escolha um sentido em silêncio."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "versionamento",
            "pergunta": "Chegou para você uma tarefa de Modelagem de ajuste. O cliente viu a arte e pediu \"o escudo maior\", sem dizer quanto. O que você faz?",
            "opcoes": [
              "Concluo a tarefa logo, para a aprovação voltar ao comercial e o cliente dizer se gostou.",
              "Aumento o escudo no tamanho que eu achar bom e salvo por cima do arquivo da arte anterior.",
              "Registro que falta a medida. Pergunto ao responsável ou ao comercial quanto aumentar. Faço o ajuste em nova versão e só então concluo a tarefa.",
              "Ignoro o pedido, porque a arte já tinha sido enviada ao cliente."
            ],
            "correta": 2,
            "feedbackCerto": "Certo. A medida não foi dada, então você pergunta. O ajuste vira nova versão. Só conclua com o trabalho feito, porque concluir devolve a aprovação ao comercial.",
            "feedbackPorOpcao": [
              "Concluir sem fazer o ajuste devolve ao cliente a mesma arte e gasta uma rodada de aprovação à toa.",
              "Inventar o tamanho e salvar por cima faz você perder a versão anterior e o histórico.",
              null,
              "O ajuste foi pedido pelo cliente. A aprovação fica parada até a modelagem concluir."
            ],
            "erroCriticoOpcoes": [
              0,
              1
            ]
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "versionamento",
            "pergunta": "Quais destas situações são alterações solicitadas, e não erros de modelagem?",
            "itens": [
              "O cliente aprovou o capacete A e agora pede o capacete B",
              "O briefing pedia escudo e o arquivo entregue não tem escudo",
              "O cliente decide aumentar a altura da figura depois de aprovada",
              "O encaixe do braço ficou diferente do que estava definido no briefing",
              "O cliente pede para colocar uma capa que não estava no pedido"
            ],
            "corretos": [
              0,
              2,
              4
            ],
            "feedbackCerto": "Isso mesmo. Mudar a decisão ou o combinado depois da aprovação é alteração solicitada.",
            "feedbackErrado": "Alteração solicitada é a que muda a decisão ou o combinado depois da aprovação. O escudo faltando e o encaixe diferente do definido são erros."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "versionamento",
            "cliente": "Cliente (pelo atendimento): \"Eu aprovei o capacete A, mas agora gostei mais do B. Troca aí rapidinho no mesmo arquivo, né?\"",
            "opcoes": [
              {
                "label": "Salvo o capacete B por cima do arquivo do capacete A, que é mais rápido.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Você perde a versão aprovada e o histórico."
              },
              {
                "label": "Digo que não dá para mudar depois de aprovado.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Você inventou uma regra. Quem decide se aceita e quanto custa é o responsável."
              },
              {
                "label": "Isso é uma alteração solicitada. Registro o pedido, deixo o arquivo aprovado como está e crio uma nova versão. Passo ao responsável o que envolve o combinado, o valor ou o prazo.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. A alteração muda a decisão anterior. Ela deve ser registrada, com versão nova, e levada ao responsável."
              },
              {
                "label": "Faço a troca e aviso depois que terminar.",
                "correta": false,
                "erroCritico": false,
                "feedback": "O registro e o aviso ao responsável vêm antes."
              }
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "versionamento",
            "pergunta": "O cliente recebeu a miniatura e diz: \"o escudo não está igual à foto\". Como você descobre se é erro ou alteração solicitada?",
            "opcoes": [
              "Pergunto ao cliente como ele prefere o escudo e mudo no mesmo arquivo.",
              "Comparo o arquivo entregue com o briefing e as referências aprovadas. Registro o resultado no pedido ou na tarefa.",
              "Trato sempre como erro da modelagem e refaço o escudo.",
              "Trato sempre como alteração solicitada, porque o cliente já tinha aprovado."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Se o arquivo não atendia ao que estava definido, é erro. Se o cliente quer algo diferente do aprovado, é alteração solicitada. Crie nova versão, sem salvar por cima da anterior.",
            "feedbackErrado": "Compare o arquivo entregue com o briefing e as referências aprovadas. Arquivo diferente do definido é erro. Pedido diferente do aprovado é alteração solicitada. Registre, crie nova versão e consulte o responsável se envolver o combinado ou o custo."
          }
        ]
      },
      {
        "dia": 9,
        "titulo": "Entrega para Impressão",
        "subtitulo": "Um pacote que o operador entende sem perguntar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que a produção precisa receber",
            "texto": "A produção precisa receber o arquivo certo, a versão, a escala, a quantidade e as observações necessárias. O operador não deve precisar montar o briefing (a descrição do pedido) de novo para descobrir o que imprimir. Entregar só um STL em uma pasta sem identificação pode causar erro, mesmo com o arquivo perfeito. Ninguém sabe se é o arquivo certo, quantas cópias fazer ou se existem peças em outro arquivo."
          },
          {
            "tipo": "conteudo",
            "titulo": "O pacote de liberação",
            "texto": "Um pacote bem feito traz: nome da peça e do pedido, versão aprovada, lista de arquivos e peças, tamanho final e quantidade. Traz também as observações, como sugestão de orientação, pontos frágeis e como as peças se encaixam. E diz o que ainda ficou em aberto, se houver. Registre tudo no pedido ou na tarefa do Valente OS, no lugar que a Valente define. Assim a informação fica junto do trabalho."
          },
          {
            "tipo": "conteudo",
            "titulo": "O teste da pessoa que não conhece o trabalho",
            "texto": "Um bom jeito de testar o seu pacote: peça para outra pessoa entender o pacote sem você explicar nada. Se ela precisar adivinhar alguma coisa, falta informação. Lembre também que o pacote não é só o arquivo. Informação clara faz a impressão acontecer sem refazer trabalho."
          },
          {
            "tipo": "conteudo",
            "titulo": "Concluir a tarefa libera quem espera",
            "texto": "No Valente OS, algumas tarefas ficam bloqueadas até outra terminar. Quando você conclui a sua tarefa de modelagem, o sistema libera sozinho as tarefas que dependiam dela. Um exemplo é a aprovação da arte, que volta para o comercial assim que a modelagem do ajuste é concluída. Por isso, só toque em Concluir tarefa depois de conferir o arquivo e registrar o pacote. Concluir antes da hora manda trabalho incompleto para o próximo setor. O Kanban mostra a etapa atual de cada pedido e se atualiza sozinho a cada 60 segundos."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "entrega_producao",
            "pergunta": "Qual pacote de entrega é o melhor para o operador de impressão?",
            "opcoes": [
              "Só o STL na pasta do trabalho, porque o operador pode olhar o pedido depois.",
              "STL com nome e versão claros, mais tamanho final, quantidade, lista de peças e observações registrados no pedido ou na tarefa.",
              "O STL por mensagem pessoal, com a explicação falada, sem registro.",
              "O STL mais novo da pasta, com a mensagem \"é este\"."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. O pacote precisa ser entendido sozinho, com tudo registrado.",
            "feedbackPorOpcao": [
              "O operador teria que montar o briefing de novo por conta própria.",
              null,
              "O que não fica registrado se perde e cria dúvida.",
              "Sem versão, escala e quantidade, a informação ainda não é suficiente."
            ]
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "entrega_producao",
            "pergunta": "Quais informações o pacote para a impressão precisa trazer?",
            "itens": [
              "Versão aprovada do arquivo",
              "Escala ou tamanho final",
              "Quantidade a imprimir",
              "Quanto tempo você levou para modelar",
              "Observações sobre pontos frágeis e encaixes"
            ],
            "corretos": [
              0,
              1,
              2,
              4
            ],
            "feedbackCerto": "Isso mesmo. Com versão, escala, quantidade e observações, a produção imprime sem adivinhar.",
            "feedbackErrado": "O tempo que você levou para modelar não ajuda a produção. Versão, escala, quantidade e observações ajudam."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "entrega_producao",
            "local": "Valente OS > tarefa ou pedido de treino, com um colega",
            "instrucao": "Monte um pacote de liberação de treino, com os itens que você aprendeu. Use um trabalho de treino e não altere pedidos reais. Peça a um colega para entender o pacote sem você explicar nada. Anote tudo o que ele precisou perguntar ou adivinhar e complete o pacote. Marque como feito só depois do teste com o colega."
          }
        ]
      },
      {
        "dia": 10,
        "titulo": "Missão Modelagem",
        "subtitulo": "Do briefing à liberação, do jeito certo",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "A missão do curso",
            "texto": "Nesta missão você faz o caminho inteiro. Você acha o trabalho no Valente OS. Lê o briefing (a descrição do pedido) e as referências. Descobre o que falta. Planeja a escala e a divisão das peças. Prepara e exporta a versão final. Faz a conferência e entrega o pacote à produção. A avaliação olha o processo, não só a aparência do modelo. Você achou o trabalho certo? Evitou inventar referência? Registrou a versão? Pensou na fabricação? Entregou informação suficiente?"
          },
          {
            "tipo": "conteudo",
            "titulo": "Lembretes de método",
            "texto": "As regras gerais deste curso, como malha fechada, tolerância e checklist, são práticas comuns da área. Já as medidas, os nomes de arquivo e os padrões de cada processo são da Valente. Quando você não tiver o número ou a regra, consulte a fonte e o responsável. Dizer \"não sei\" e perguntar não é erro. Inventar é erro. O procedimento oficial da Valente sempre vale mais que qualquer regra geral deste curso."
          },
          {
            "tipo": "cenario",
            "competencia": "conferencia_liberacao",
            "titulo": "Briefing simulado: busto de guerreira",
            "noInicial": "a",
            "nos": {
              "a": {
                "cliente": "Briefing simulado no pedido: \"Quero uma miniatura da minha personagem guerreira, igual à foto, para pintar. Tamanho: o que ficar bom.\" Só há uma foto de frente e nenhuma medida. Qual é o seu primeiro passo?",
                "opcoes": [
                  {
                    "label": "Começo a modelar pela foto e escolho eu mesmo o tamanho.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Você inventou o tamanho e as partes que não aparecem na foto.",
                    "proximo": "b"
                  },
                  {
                    "label": "Registro no pedido o que falta (tamanho, costas, acessórios, finalidade) e consulto o responsável antes de modelar.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. O que falta se pergunta na fonte, sem inventar.",
                    "proximo": "b"
                  },
                  {
                    "label": "Peço qualquer foto extra pelo WhatsApp e já começo, sem registrar nada no sistema.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Você deixa o briefing fora do Valente OS e perde o registro.",
                    "proximo": "b"
                  },
                  {
                    "label": "Modelo a frente e deixo as costas lisas para ganhar tempo.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Você mudou o combinado em silêncio.",
                    "proximo": "b"
                  }
                ]
              },
              "b": {
                "cliente": "O responsável respondeu. A altura final está definida e a peça vai ser pintada. Ele enviou novas fotos de lado e de costas. Agora você precisa planejar a modelagem. O que você leva em conta?",
                "opcoes": [
                  {
                    "label": "Confiro se os detalhes finos funcionam na escala final. Planejo separar a espada e a cabeça para facilitar a pintura, com encaixes com tolerância no padrão da Valente.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Escala, divisão e encaixes pensados para a fabricação e a pintura.",
                    "proximo": "c"
                  },
                  {
                    "label": "Modelo tudo em uma peça só, sem pensar em suportes nem em pintura, e vejo na impressão.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Isso ignora riscos de fabricação que dá para prever.",
                    "proximo": "c"
                  },
                  {
                    "label": "Uso a espessura mínima que eu acho certa, porque sei que 1 mm basta.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Você inventou um padrão. Os mínimos vêm da produção.",
                    "proximo": "c"
                  },
                  {
                    "label": "Salvo os arquivos em qualquer pasta e organizo depois.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Organizar versão e pasta faz parte do trabalho desde o início.",
                    "proximo": "c"
                  }
                ]
              },
              "c": {
                "cliente": "O modelo ficou pronto. Você exportou o STL e precisa liberar para a impressão. Qual é a atitude certa?",
                "opcoes": [
                  {
                    "label": "Confiro dimensões, malha, peças, versão e encaixes. Registro o pacote no pedido ou na tarefa. Espero a validação do responsável antes do status Liberado.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. A conferência vem antes, e o responsável valida."
                  },
                  {
                    "label": "Marco como liberado, porque o modelo está bonito na tela.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Liberar sem conferir é erro crítico."
                  },
                  {
                    "label": "Entrego só o STL e aviso a produção por mensagem.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Falta o registro do pacote."
                  },
                  {
                    "label": "Libero sem conferir a escala, porque não mudei o tamanho.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Escala errada na exportação é comum. Ela precisa ser conferida."
                  }
                ]
              }
            }
          },
          {
            "tipo": "missao",
            "competencia": "conferencia_liberacao",
            "titulo": "Missão Modelagem: miniatura da guerreira",
            "objetivo": "Conduzir um briefing simulado, do recebimento até a liberação, sem inventar informação e deixando um pacote claro para a produção.",
            "contexto": "Pedido de treino, que não é real: o cliente quer uma miniatura de uma guerreira para pintar, a partir de uma foto de frente, sem medidas. Use só material de treino e não altere pedidos reais.",
            "tarefas": [
              "Achar o trabalho simulado e as referências dele, e confirmar a pasta de saída",
              "Classificar as referências como suficientes, incompletas ou contraditórias e listar o que falta",
              "Registrar as dúvidas e consultar o responsável, sem supor tamanho ou detalhes que não aparecem",
              "Planejar escala, espessuras, divisão de peças e encaixes, confirmando os padrões com a produção",
              "Preparar e exportar o arquivo com nome e versão no padrão da Valente, conferindo escala e peças",
              "Preencher o checklist de liberação e montar o pacote de entrega com versão, escala, quantidade e observações",
              "Simular um pedido de ajuste da arte: tratar como tarefa de Modelagem de ajuste, criar nova versão sem salvar por cima da aprovada e concluir a tarefa só com o ajuste pronto e conferido",
              "Pedir a validação do responsável antes de considerar o trabalho Liberado"
            ],
            "criterioConclusao": "Você fez todos os itens com informação real. Não completou nenhuma falta com suposição. Preencheu o checklist. O responsável validou a liberação."
          }
        ]
      }
    ]
  },
  "impressao_3d": {
    "id": "impressao_3d",
    "nome": "Impressão 3D",
    "descricao": "Operar a estação de impressão 3D em resina e FDM, da OT até a liberação para o pós-impressão.",
    "icone": "🖨️",
    "versao": 3,
    "cargosPermitidos": null,
    "competencias": [
      "Estação e segurança",
      "Leitura da OT",
      "Processos e fatiamento",
      "Preparo e acompanhamento",
      "Inspeção e falhas",
      "Liberação para pós-impressão"
    ],
    "criteriosConclusao": "Explicar cuidados de segurança, preparar uma impressão simulada, conferir parâmetros e identificar falhas. Uso de equipamento exige autorização e supervisão conforme o procedimento interno.",
    "dias": [
      {
        "dia": 1,
        "titulo": "Minha estação de impressão",
        "subtitulo": "Equipamentos, materiais, EPIs e onde ver a tarefa",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que existe na estação",
            "texto": "Na estação de impressão 3D você encontra impressoras, um computador ou tablet, o Valente OS, o fatiador, materiais, ferramentas e EPIs. A impressora é a máquina que faz a peça. O fatiador é o programa que transforma o modelo 3D em instruções para a máquina. O material é a resina líquida ou o filamento, um fio de plástico usado no processo FDM. Cada item tem um uso. Saiba qual é antes de mexer."
          },
          {
            "tipo": "conteudo",
            "titulo": "Disponível não é autorizado",
            "texto": "Máquina livre não quer dizer trabalho autorizado. Material na prateleira não serve para qualquer peça. O que produzir está na tarefa, no Valente OS. Ao abrir a tarefa, você vê no topo a caixa SUA MISSÃO em destaque. Ela mostra o que fazer e quantas unidades faltam (por exemplo, 8 de 18, com a linha Já feitas nesta tarefa). Abaixo ficam as instruções, o checklist e as fotos de referência. O seu PIN mostra ao sistema quem você é. O seu nome fica gravado nas tarefas que você inicia e conclui."
          },
          {
            "tipo": "conteudo",
            "titulo": "EPIs e ventilação",
            "texto": "EPI é o equipamento de proteção individual. Com resina líquida, a prática geral é usar luvas adequadas, proteger os olhos e trabalhar em lugar ventilado. A resina irrita a pele e tem cheiro forte. Com ferramentas de corte e solventes, tenha o mesmo cuidado. Quais máquinas você pode operar? Quais EPIs cada uma exige? Siga o procedimento da Valente ou consulte o responsável."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "estacao_seguranca",
            "cliente": "Colega: 'A impressora do canto está livre e tem resina no tanque. Pode já ir imprimindo uma peça que você acha que vai precisar, né?'",
            "opcoes": [
              {
                "label": "Posso. Máquina livre e material na estação mostram que está liberado.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Máquina livre e material na estação não são autorização. Sem tarefa, o trabalho não está autorizado."
              },
              {
                "label": "Só imprimo depois de abrir a tarefa no Valente OS e confirmar que posso operar essa máquina.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. A tarefa diz o que produzir. A Valente define quais máquinas você pode operar."
              },
              {
                "label": "Imprimo uma peça de teste pequena, porque gasta pouco material.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Teste também gasta material e tempo de máquina. Pode ocupar o lugar de um trabalho real. Precisa de tarefa ou de autorização."
              },
              {
                "label": "Pergunto ao colega qual resina usar e faço o que ele disser, sem olhar a tarefa.",
                "correta": false,
                "erroCritico": false,
                "feedback": "O material certo está na tarefa e na ficha, não na memória de alguém."
              }
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "estacao_seguranca",
            "local": "Estação de impressão (área física) e Valente OS: aba Tarefas (computador) ou Minhas funções (tablet)",
            "instrucao": "Não inicie nenhuma produção. Ande pela estação com o líder ou responsável e veja as impressoras, os materiais, as ferramentas e os EPIs. No computador (aba Tarefas) ou no tablet (Minhas funções), ache onde as tarefas aparecem e a caixa SUA MISSÃO no topo de uma tarefa. Pergunte quais máquinas você pode operar. Confirme só depois de ver cada item."
          }
        ]
      },
      {
        "dia": 2,
        "titulo": "Entendendo a tarefa antes de imprimir",
        "subtitulo": "Conferir antes de preparar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que a tarefa precisa dizer",
            "texto": "A tarefa deve dizer o que produzir: peça, arquivo e versão, quantidade, tamanho, material, prioridade e observações. A versão importa. O mesmo modelo pode ter sido corrigido depois. Imprimir a versão antiga é usar o arquivo errado. E esse erro só aparece quando a peça já está pronta."
          },
          {
            "tipo": "conteudo",
            "titulo": "Quando a tarefa e o arquivo não batem",
            "texto": "A tarefa diz uma coisa e o arquivo diz outra? Você não escolhe sozinho. Exemplo: a tarefa pede 16 unidades, mas a plataforma preparada tem 15. Se você vê isso antes de iniciar, perde um minuto. Se vê depois de quatro horas, a máquina ficou ocupada e falta uma peça."
          },
          {
            "tipo": "conteudo",
            "titulo": "A ordem da conferência",
            "texto": "Siga sempre esta ordem: identificar a tarefa, conferir o arquivo, conferir a quantidade, conferir o material e só então preparar. Faltou uma informação? Não invente. Procure no Valente OS, na ficha ou na tarefa. Se precisar, pergunte ao responsável. Dizer 'não sei, vou confirmar' não é erro. Adivinhar é erro."
          },
          {
            "tipo": "ordenar",
            "competencia": "leitura_ot",
            "instrucao": "Coloque na ordem certa a conferência antes de imprimir.",
            "itens": [
              "Identificar a tarefa",
              "Conferir arquivo e versão",
              "Conferir quantidade",
              "Conferir material",
              "Preparar a impressão"
            ],
            "feedbackCerto": "Isso mesmo. Preparar vem por último.",
            "feedbackErrado": "A ordem é: identificar a tarefa, arquivo e versão, quantidade, material, e só então preparar."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "leitura_ot",
            "pergunta": "A tarefa pede 16 unidades. O arquivo aberto no fatiador tem 15 peças na plataforma. O que você faz?",
            "opcoes": [
              "Corrige a quantidade como a tarefa pede, se isso já faz parte do seu trabalho. Se o erro vem do arquivo ou da versão, avisa o responsável antes de iniciar.",
              "Imprime as 15 e depois vê se dá tempo de fazer a que falta.",
              "Confia no arquivo, porque quem preparou deve ter calculado.",
              "Inicia com 15 e registra 16 ao concluir, para a tarefa ficar certa."
            ],
            "correta": 0,
            "feedbackCerto": "Certo. A quantidade e o arquivo precisam bater com a tarefa antes de iniciar.",
            "feedbackPorOpcao": [
              null,
              "Você já sabe que está errado e mesmo assim iniciaria. Isso faz perder tempo e deixa peça faltando.",
              "A quantidade certa é a da tarefa. O arquivo preparado pode ter erro.",
              "Registrar o que não foi feito é esconder o problema. É um erro crítico."
            ],
            "erroCriticoOpcoes": [
              1,
              3
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "leitura_ot",
            "pergunta": "Você abriu uma tarefa de impressão. Ela mostra a peça, o arquivo e a quantidade, mas não diz o material. O que você faz?",
            "opcoes": [
              "Usa o material que já está na máquina.",
              "Usa o mesmo material da última peça parecida.",
              "Procura na ficha e no Valente OS. Se não achar, pergunta ao responsável antes de preparar."
            ],
            "correta": 2,
            "feedbackCerto": "Certo. Quando falta informação, você procura na fonte ou pergunta. Não inventa.",
            "feedbackErrado": "Não adivinhe o que falta. Procure na ficha e no Valente OS. Se não achar, pergunte ao responsável antes de preparar."
          }
        ]
      },
      {
        "dia": 3,
        "titulo": "Resina x FDM",
        "subtitulo": "Dois processos, dois jeitos de trabalhar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Como cada processo funciona",
            "texto": "Na impressão por resina, uma resina líquida fica em um tanque. A luz endurece essa resina, camada por camada. A peça sai molhada de resina e cheia de suportes. Depois ela precisa de lavagem e de cura UV. No FDM, a máquina derrete um filamento de plástico e coloca em camadas sobre uma mesa. Depois, o comum é tirar os suportes e dar acabamento na superfície."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que muda no trabalho",
            "texto": "Na resina, os cuidados principais são o tanque (com o filme FEP no fundo), o nível de resina, as luvas e a ventilação. No FDM, cuide da mesa limpa e nivelada, da primeira camada bem grudada e do estado do filamento. O filamento puxa umidade do ar e isso pode causar defeitos. Para temperatura e tempo de exposição, siga o procedimento da Valente ou consulte o responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "Quem escolhe o processo",
            "texto": "O processo vem da tarefa e do padrão definido. Não vem do gosto do operador nem da máquina que está livre. Uma peça marcada para resina não vai para o FDM só porque uma impressora está parada. Isso muda o acabamento, a resistência e a precisão da medida. Só troque com decisão autorizada."
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "processos_fatiamento",
            "pergunta": "Quais itens são cuidados comuns da impressão em RESINA?",
            "itens": [
              "Tanque de resina com filme FEP",
              "Mesa nivelada e primeira camada bem grudada",
              "Luvas e ventilação ao mexer com resina líquida",
              "Umidade do filamento",
              "Lavagem e cura UV depois da impressão"
            ],
            "corretos": [
              0,
              2,
              4
            ],
            "feedbackCerto": "Certo. Os outros dois são cuidados do FDM.",
            "feedbackErrado": "Tanque com FEP, luvas e ventilação, lavagem e cura UV são da resina. Mesa nivelada e umidade do filamento são do FDM."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "processos_fatiamento",
            "cliente": "Colega: 'A impressora de resina está ocupada e a de FDM está livre. Essa peça é pra resina, mas se eu mandar no FDM sai hoje. Manda ver?'",
            "opcoes": [
              {
                "label": "Mando no FDM. O importante é entregar no prazo.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Trocar o processo muda o acabamento e a resistência. Só com decisão autorizada."
              },
              {
                "label": "Mando no FDM e aviso depois, se ninguém reclamar.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Avisar depois é esconder uma decisão que não era sua."
              },
              {
                "label": "Espero a resina terminar e imprimo mais tarde, sem falar com ninguém.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Esperar pode ser certo. Mas, se o prazo aperta, avise o responsável. Não decida sozinho."
              },
              {
                "label": "A tarefa pede resina, então mantenho resina. Se o prazo é problema, falo com o responsável para ele decidir.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. O processo segue a tarefa. Quem muda é quem decide."
              }
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "processos_fatiamento",
            "local": "Estação de impressão (área física)",
            "instrucao": "Com o líder, veja quais máquinas da estação são de resina e quais são FDM. Pergunte quais você pode operar. Confirme quando souber separar os dois tipos e souber onde ver o que é autorizado."
          }
        ]
      },
      {
        "dia": 4,
        "titulo": "Preparação do arquivo",
        "subtitulo": "Fatiamento, orientação, suportes e prévia",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que é fatiar",
            "texto": "Fatiar é transformar o modelo 3D em instruções para a máquina. O programa corta o modelo em camadas finas e cria o caminho que a máquina vai seguir. Orientação é o ângulo em que a peça fica na plataforma. Suportes são apoios temporários que seguram as partes que ficariam no ar. Posicionamento é o lugar de cada peça na plataforma."
          },
          {
            "tipo": "conteudo",
            "titulo": "Por que a preparação importa",
            "texto": "Orientação ruim pode deixar marcas na peça ou aumentar as falhas. Com pouco suporte, uma parte da peça pode cair ou entortar. Duplicar uma peça na plataforma muda a quantidade e também o tempo total. Por isso, fatie sempre no padrão, com os perfis oficiais e os parâmetros (ajustes da impressão) autorizados. Siga o procedimento da Valente ou consulte o responsável. Não mude parâmetros críticos sem autorização."
          },
          {
            "tipo": "conteudo",
            "titulo": "A prévia é a última conferência",
            "texto": "Antes de enviar para a máquina, abra a prévia do fatiamento e confira. É a versão certa do arquivo? A quantidade bate com a tarefa? Todas as peças cabem dentro da plataforma? Os suportes seguram as partes no ar? O tempo estimado faz sentido? Só então envie. Corrigir na prévia leva minutos. Depois de iniciar, custa horas."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "processos_fatiamento",
            "pergunta": "Você abriu o fatiamento e viu que uma parte da peça ficou sem suporte, pendurada. O que fazer?",
            "opcoes": [
              "Enviar assim mesmo e torcer para a parte se segurar.",
              "Tirar essa parte do arquivo para a impressão ficar mais rápida.",
              "Aumentar os parâmetros do perfil por conta própria até o suporte parecer forte.",
              "Ajustar a orientação ou os suportes dentro do que o procedimento permite. Se precisar mexer em parâmetro crítico, consultar o responsável."
            ],
            "correta": 3,
            "feedbackCerto": "Certo. Corrija na prévia, dentro do que é autorizado.",
            "feedbackPorOpcao": [
              "Enviar sabendo do risco é passar adiante trabalho com defeito.",
              "Mudar o modelo muda a peça entregue.",
              "Não se muda parâmetro crítico sem autorização.",
              null
            ],
            "erroCriticoOpcoes": [
              0,
              2
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "processos_fatiamento",
            "afirmacao": "Se a prévia do fatiamento parece boa, não é preciso conferir a quantidade e a versão do arquivo com a tarefa.",
            "correta": false,
            "feedbackCerto": "Isso. A prévia só vale se o arquivo for a versão certa e a quantidade bater com a tarefa.",
            "feedbackErrado": "Prévia bonita não prova que a versão e a quantidade estão certas. Confira sempre com a tarefa."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "processos_fatiamento",
            "local": "Fatiador (computador da estação)",
            "instrucao": "Não envie nada para a máquina. Com o líder, abra um arquivo de treino no fatiador. Ache a prévia por camadas, os suportes, a quantidade de peças na plataforma e o tempo estimado. Confirme quando souber onde conferir cada um."
          }
        ]
      },
      {
        "dia": 5,
        "titulo": "Preparação da máquina",
        "subtitulo": "Checagem rápida que evita perder horas",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Por que checar antes",
            "texto": "Começar com o material errado ou com a máquina fora do normal faz uma tarefa simples virar retrabalho. A checagem antes de iniciar leva poucos minutos. Ela evita perder horas de máquina e material. Use o checklist próprio da máquina. Para procedimentos químicos e mecânicos, siga o procedimento da Valente ou consulte o responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "Checagem na resina",
            "texto": "Na resina, a prática geral é conferir estes pontos. A resina é a certa e tem o bastante no tanque? O filme FEP está sem riscos, furos ou restos endurecidos? A plataforma de impressão está limpa e bem presa? A tela e a tampa estão em ordem? Resto de resina endurecida no tanque pode arrancar a peça do suporte. Use luvas e ventilação ao mexer com resina."
          },
          {
            "tipo": "conteudo",
            "titulo": "Checagem no FDM",
            "texto": "No FDM, confira o filamento certo e seco, o bico sem sujeira, a mesa limpa e nivelada e a primeira camada bem grudada. Filamento úmido pode estalar, soltar fiapos e deixar o acabamento ruim. Nivelar a mesa é ajustar a distância do bico para o filamento grudar por igual. Mesa suja ou desnivelada é causa comum de peça descolando e de warping, que é o canto da peça levantando."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "preparo_acompanhamento",
            "pergunta": "Você vai iniciar uma impressão em resina e vê pedaços endurecidos boiando no tanque. Qual é o passo certo?",
            "opcoes": [
              "Iniciar mesmo assim, porque a máquina costuma passar por cima.",
              "Mexer com uma ferramenta qualquer e iniciar em seguida.",
              "Não iniciar, avisar o responsável e cuidar do tanque pelo procedimento oficial antes de imprimir.",
              "Iniciar uma peça menor para testar se funciona."
            ],
            "correta": 2,
            "feedbackCerto": "Isso. Máquina fora do normal se resolve antes de iniciar, pelo procedimento.",
            "feedbackPorOpcao": [
              "Resto endurecido pode estragar a impressão e o tanque. Seguir em frente é erro crítico.",
              "Ferramenta improvisada pode riscar o FEP e estragar o tanque.",
              null,
              "Peça pequena usa o mesmo tanque com problema."
            ],
            "erroCriticoOpcoes": [
              0
            ]
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "preparo_acompanhamento",
            "pergunta": "Quais itens fazem parte da checagem do FDM antes de iniciar?",
            "itens": [
              "Mesa limpa e nivelada",
              "Filme FEP sem riscos",
              "Filamento certo e seco",
              "Bico sem sujeira",
              "Plataforma de resina bem presa"
            ],
            "corretos": [
              0,
              2,
              3
            ],
            "feedbackCerto": "Certo. FEP e plataforma de resina são da impressão em resina.",
            "feedbackErrado": "Mesa, filamento e bico são do FDM. FEP e plataforma de resina são da impressão em resina."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "preparo_acompanhamento",
            "local": "Estação de impressão (checklist da máquina)",
            "instrucao": "Não inicie produção. Com o líder, ache o checklist próprio de uma máquina e passe por cada item. Confirme quando souber onde fica o checklist e o que fazer se algum item estiver fora do normal."
          }
        ]
      },
      {
        "dia": 6,
        "titulo": "Iniciando e acompanhando",
        "subtitulo": "Iniciar a tarefa, observar e perceber sinais",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Iniciar a tarefa certa",
            "texto": "Na tarefa, os botões são Iniciar tarefa, Pausar, Retomar e Concluir tarefa. No computador existe também Pular tarefa, que não aparece no tablet. Ao começar o trabalho, toque em Iniciar tarefa na tarefa certa. Assim o sistema sabe o que está em produção e quem está fazendo (o PIN mostra quem é você). Confira se a máquina recebeu o arquivo da mesma tarefa. Confira se a caixa SUA MISSÃO bate com o que você vai imprimir. Iniciar na tarefa errada confunde a quantidade e o responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "Sua fila no tablet",
            "texto": "No tablet, Minhas funções abre uma fila única com todas as tarefas da sua função. Há filtros por tipo, como Impressão e Pintura. O botão grande Próxima da fila leva à próxima tarefa a fazer. Outras funções mostra tarefas de outras pessoas, para você ajudar. Mesmo ajudando, vale o que está na tarefa e na caixa SUA MISSÃO. Uma tarefa que depende de outra só aparece quando a anterior é concluída. No computador, a aba Tarefas mostra as tarefas que são suas."
          },
          {
            "tipo": "conteudo",
            "titulo": "Acompanhar não é olhar sem parar",
            "texto": "Acompanhar é fazer as verificações previstas e perceber sinais de problema. Para saber os pontos de inspeção e quando parar, siga o procedimento da Valente ou consulte o responsável. Regra geral: a primeira camada é a mais importante. Olhe o começo com atenção. Precisa parar o trabalho para resolver algo? Toque em Pausar na tarefa. Quando o problema estiver resolvido, toque em Retomar."
          },
          {
            "tipo": "conteudo",
            "titulo": "Sinais de problema e decisão",
            "texto": "Sinais comuns: peça soltando da plataforma ou da mesa, cantos levantando, fiapos de filamento, camadas com falha, barulho diferente ou cheiro estranho. Não continue só para ver se termina. Decida entre três caminhos: corrigir com procedimento autorizado, pausar ou cancelar a impressão, ou chamar o responsável. Se houver risco, a segurança vem primeiro."
          },
          {
            "tipo": "cenario",
            "competencia": "preparo_acompanhamento",
            "titulo": "Primeira camada com problema",
            "noInicial": "a",
            "nos": {
              "a": {
                "cliente": "Você iniciou uma impressão FDM. Na primeira camada, o filamento sai mas não gruda na mesa. Os cantos já estão soltando.",
                "opcoes": [
                  {
                    "label": "Deixar rodando. As próximas camadas vão compensar.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "A falha só cresce. Continuar sem agir é seguir com um defeito que você já viu."
                  },
                  {
                    "label": "Pausar a impressão e procurar a causa (mesa suja, desnivelada) pelo procedimento.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Parar cedo poupa material e horas.",
                    "proximo": "b"
                  },
                  {
                    "label": "Dar uma pancada na mesa para ajustar.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Isso pode estragar a máquina e não resolve a causa."
                  },
                  {
                    "label": "Aumentar parâmetros por conta própria durante a impressão.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Não se muda parâmetro crítico sem autorização."
                  }
                ]
              },
              "b": {
                "cliente": "Você pausou. Limpou a mesa e olhou o nivelamento. Mas ainda não tem certeza do ajuste certo para esse material.",
                "opcoes": [
                  {
                    "label": "Chutar um valor e reiniciar.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Chutar é inventar. O ajuste certo está no procedimento da Valente."
                  },
                  {
                    "label": "Consultar o procedimento da Valente. Se a dúvida continuar, consultar o responsável.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Isso. Não saber é normal. Inventar não pode.",
                    "proximo": "c"
                  },
                  {
                    "label": "Jogar o material fora e trocar de máquina sem avisar.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Trocar de máquina sem avisar quebra a ligação da tarefa com a máquina."
                  },
                  {
                    "label": "Tocar em Concluir tarefa para sair do alerta.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Concluir sem ter produzido é marcar como feito o que não foi feito."
                  }
                ]
              },
              "c": {
                "cliente": "O responsável liberou você para reiniciar. Como registrar?",
                "opcoes": [
                  {
                    "label": "Reiniciar com Retomar na tarefa e voltar a acompanhar a primeira camada.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Retome e olhe a primeira camada com atenção."
                  },
                  {
                    "label": "Reiniciar e não dizer nada, para não parecer que errou.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Esconder a falha impede de aprender com ela."
                  },
                  {
                    "label": "Reiniciar e apagar as anotações da tentativa anterior.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Apagar o histórico esconde o que aconteceu."
                  },
                  {
                    "label": "Deixar a máquina rodando e sair, já que o problema foi resolvido.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Depois de uma falha, a primeira camada pede atenção extra."
                  }
                ]
              }
            }
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "preparo_acompanhamento",
            "local": "Valente OS, tablet, Minhas funções e tarefa de impressão (só olhar)",
            "instrucao": "Não mude nenhuma tarefa real. No tablet, abra uma tarefa de impressão. Ache a caixa SUA MISSÃO e os botões Iniciar tarefa, Pausar, Retomar e Concluir tarefa. Confirme quando souber para que serve cada um e quando você usaria Pausar."
          }
        ]
      },
      {
        "dia": 7,
        "titulo": "Quando a impressão termina",
        "subtitulo": "Terminar não é aprovar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Terminar não é aprovar",
            "texto": "Quando a máquina para, a impressão terminou. Mas a peça ainda não foi aprovada. A máquina pode terminar normalmente e a peça sair com defeito. Antes de liberar, confira a quantidade, se a peça está inteira, as falhas, as partes tortas e o resultado geral. Retire a peça com cuidado e sem forçar, para não quebrar. Use luvas quando houver resina."
          },
          {
            "tipo": "conteudo",
            "titulo": "Contar e inspecionar",
            "texto": "Conte as peças e compare com a tarefa. Uma bandeja com 16 lugares e 15 peças boas não pode ser registrada como 16 concluídas. Olhe cada peça e procure: partes faltando, suportes quebrados, camadas com falha, warping (canto levantado), superfície com defeito e peças que soltaram no meio da impressão."
          },
          {
            "tipo": "conteudo",
            "titulo": "Registrar o que aconteceu",
            "texto": "Registre do jeito que o procedimento manda. Só use Concluir tarefa quando a tarefa foi feita de verdade. O registro é por fornada, que é cada leva de peças impressas. Ele deve mostrar a verdade: quantas peças boas, quantas reprovadas e por quê. Se a tarefa pede 16 e você já fez 10, a SUA MISSÃO mostra o que falta. Um registro com número maior que o real atrapalha a próxima fornada. Para os detalhes do registro, siga o procedimento da Valente ou consulte o responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "A janela de conclusão da impressão",
            "texto": "Ao tocar em Concluir tarefa em uma impressão, o Valente OS abre uma janela com quatro respostas: Tudo certo, Saiu só parte, Falhou e Cancelada. Escolha a que mostra o que aconteceu de verdade. Tudo certo é para quando saiu bom tudo o que a tarefa pedia. Saiu só parte é para quando só uma parte saiu boa. Falhou e Cancelada são para quando o trabalho não se completou. O registro é por fornada, com o motivo quando houve falha. Ficou em dúvida entre duas respostas? Confirme com o responsável."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "inspecao_falhas",
            "pergunta": "A bandeja tinha 16 lugares. Saíram 15 peças boas e 1 com camada falhada. Como você registra?",
            "opcoes": [
              "16 concluídas, porque a bandeja estava completa.",
              "15 boas e 1 falha registrada com o motivo, separada das aprovadas.",
              "15 concluídas, sem falar da falha, já que a quantidade das boas está certa.",
              "Jogo fora a peça com defeito, sem registro."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Quantidade real e falha com o motivo.",
            "feedbackPorOpcao": [
              "Registrar 16 é afirmar o que não existe. É um erro crítico.",
              null,
              "Sem o registro da falha, ninguém consegue procurar a causa.",
              "Jogar fora sem registro apaga a prova."
            ],
            "erroCriticoOpcoes": [
              0,
              2,
              3
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "inspecao_falhas",
            "afirmacao": "Se a impressora terminou sem mostrar erro, as peças já podem ser consideradas aprovadas.",
            "correta": false,
            "feedbackCerto": "Isso. Terminar sem erro não prova que as peças estão boas.",
            "feedbackErrado": "A máquina pode terminar normalmente e mesmo assim fazer peças com defeito. A inspeção é sua."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "inspecao_falhas",
            "pergunta": "A impressão de uma bandeja com 12 lugares terminou: 9 peças boas e 3 com falha. Você toca em Concluir tarefa e a janela da impressão abre. Qual resposta combina com o resultado?",
            "opcoes": [
              "Tudo certo, porque a máquina terminou sem erro.",
              "Cancelada, porque nem todas as peças ficaram boas.",
              "Saiu só parte, informando quantas ficaram boas e o motivo da falha nas outras.",
              "Falhou, porque houve peças ruins na bandeja."
            ],
            "correta": 2,
            "feedbackCerto": "Certo. Só uma parte saiu boa. A resposta e o registro da fornada mostram o que saiu de verdade e por que o resto falhou.",
            "feedbackPorOpcao": [
              "Terminar não é aprovar. Dizer Tudo certo com 3 peças ruins é registrar o que não aconteceu.",
              "Cancelada é para quando o trabalho foi interrompido. Aqui a bandeja terminou e tem peças boas.",
              null,
              "Falhou é para quando nada se aproveita. Aqui 9 peças saíram boas e isso precisa aparecer."
            ],
            "erroCriticoOpcoes": [
              0
            ]
          },
          {
            "tipo": "ordenar",
            "competencia": "inspecao_falhas",
            "instrucao": "Coloque na ordem certa: você retirou uma bandeja e uma das peças está com um canto levantado.",
            "itens": [
              "Contar as peças e comparar com a tarefa",
              "Inspecionar e reprovar a peça com o canto levantado",
              "Registrar a quantidade real e a falha com o motivo"
            ],
            "feedbackCerto": "Certo. Primeiro você conta, depois inspeciona e por último registra a verdade.",
            "feedbackErrado": "A ordem é: contar e comparar com a tarefa, inspecionar e reprovar a peça com warping, e só então registrar a quantidade real e a falha com o motivo."
          }
        ]
      },
      {
        "dia": 8,
        "titulo": "Falhas de impressão",
        "subtitulo": "Perceber, separar e avisar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Falhas comuns",
            "texto": "Falha é todo resultado diferente do que a tarefa pede. Exemplos: peça solta da plataforma, suporte quebrado, material que acabou no meio da impressão, falha em parte da peça, peça torta, arquivo errado ou máquina parada. No FDM, os nomes mais comuns são warping (canto levantando), descolamento da mesa e falha de camada (camadas fora do lugar ou faltando)."
          },
          {
            "tipo": "conteudo",
            "titulo": "Procurar a causa, não o culpado",
            "texto": "O objetivo não é achar um culpado. É não deixar a falha se repetir e proteger o trabalho dos outros setores. Imprimir de novo sem pensar pode repetir a mesma causa. Antes, olhe o que você pode olhar: arquivo, preparação, material, máquina e outros pontos que cabem à sua função. Causas comuns: mesa suja ou desnivelada, filamento úmido, pouco suporte, FEP sujo ou riscado, quantidade errada."
          },
          {
            "tipo": "conteudo",
            "titulo": "Separar e avisar",
            "texto": "Não esconda a falha. Não misture peça reprovada com peça aprovada. Separe a peça, identifique e registre a falha com o motivo. No tablet, isso é feito na janela de conclusão da impressão, com a resposta Falhou ou Saiu só parte. A causa não cabe à sua função ou é preciso imprimir de novo? Avise o responsável. Para descarte e reimpressão, siga o procedimento da Valente ou consulte o responsável."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "inspecao_falhas",
            "cliente": "Colega: 'Deu falha na peça 7, mas sobraram 15 boas. Joga a ruim junto com as outras e a gente vê isso depois, ninguém percebe.'",
            "opcoes": [
              {
                "label": "Jogo junto e vejo depois se alguém reclama.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Misturar peça reprovada com aprovada é erro crítico. A peça ruim pode chegar ao cliente."
              },
              {
                "label": "Separo e identifico a peça ruim, registro a falha com o motivo e aviso o responsável.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. Isso protege os outros setores e a causa pode ser tratada."
              },
              {
                "label": "Jogo a ruim fora e não registro nada, para não dar trabalho.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Sem registro, ninguém procura a causa e a falha pode se repetir."
              },
              {
                "label": "Imprimo a peça de novo logo, sem avisar. Assim o prazo não muda.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Imprimir de novo sem entender a causa pode repetir a falha e gastar material."
              }
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "inspecao_falhas",
            "pergunta": "Uma peça saiu com warping (cantos levantados). Qual é o melhor primeiro passo antes de imprimir de novo?",
            "opcoes": [
              "Procurar a causa (mesa suja ou desnivelada, primeira camada, material) e avisar o responsável.",
              "Imprimir de novo na mesma máquina, com o mesmo arquivo.",
              "Esconder a peça e pegar outra da bandeja anterior.",
              "Passar a tarefa para outra máquina sem avisar."
            ],
            "correta": 0,
            "feedbackCerto": "Isso. Entender antes de repetir.",
            "feedbackPorOpcao": [
              null,
              "Isso pode repetir a mesma falha.",
              "Usar peça de outra tarefa confunde os pedidos e esconde o defeito.",
              "Trocar de máquina sem avisar quebra o histórico da tarefa."
            ],
            "erroCriticoOpcoes": [
              2
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "inspecao_falhas",
            "local": "Valente OS, janela de conclusão da impressão (só olhar)",
            "instrucao": "Não registre nada real. Peça ao líder para mostrar a janela que abre ao concluir uma tarefa de impressão. Veja onde se informa a fornada com falha e o motivo. Confirme quando souber como registrar a falha e por que o motivo importa."
          }
        ]
      },
      {
        "dia": 9,
        "titulo": "Liberando para Pós-impressão",
        "subtitulo": "Entregar o que o próximo setor consegue conferir",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que a Pós-impressão precisa",
            "texto": "Pós-impressão é a etapa do Kanban que recebe as suas peças. Ela precisa de três coisas: a quantidade identificada, as peças em bom estado para o processo e a ligação clara com a tarefa e o pedido. Se ela tiver que adivinhar o que recebeu, o erro só aparece depois, quando já sai caro."
          },
          {
            "tipo": "conteudo",
            "titulo": "Risco de misturar",
            "texto": "Misturar peças de pedidos diferentes aumenta muito o risco de troca. Peças pequenas sem identificação podem sumir ou ir para o conjunto errado. Separe por tarefa. Use recipientes ou etiquetas conforme o padrão. Guarde as peças pequenas juntas e identificadas. Para o formato da identificação e o local de entrega, siga o procedimento da Valente ou consulte o responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "Concluir e liberar",
            "texto": "Depois de contar, inspecionar e organizar, toque em Concluir tarefa. Isso registra o fim do trabalho. Só conclua quando o trabalho terminou de verdade e a entrega está identificada. Concluir com peça faltando ou sem conferir passa o problema para o próximo setor. Depois ele não tem como saber de onde veio. As tarefas que dependiam desta são liberadas sozinhas quando ela é concluída."
          },
          {
            "tipo": "ordenar",
            "competencia": "liberacao_pos",
            "instrucao": "Coloque na ordem certa o fechamento da tarefa.",
            "itens": [
              "Contar as peças e comparar com a tarefa",
              "Inspecionar e separar as peças reprovadas",
              "Organizar e identificar por tarefa e pedido",
              "Registrar a quantidade e as falhas",
              "Concluir a tarefa e liberar para a Pós-impressão"
            ],
            "feedbackCerto": "Certo. Concluir vem depois de conferir e identificar.",
            "feedbackErrado": "A ordem é contar, inspecionar, organizar e identificar, registrar, e só então concluir e liberar."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "liberacao_pos",
            "pergunta": "Você tem peças de duas tarefas diferentes na mesma bandeja, todas parecidas. O que faz antes de liberar?",
            "opcoes": [
              "Libera tudo junto. A Pós-impressão separa depois.",
              "Marca todas com o nome da tarefa mais antiga.",
              "Libera só uma tarefa e deixa a outra sem registro.",
              "Separa por tarefa, identifica cada grupo e confere a quantidade de cada um."
            ],
            "correta": 3,
            "feedbackCerto": "Certo. Cada tarefa vai separada e identificada.",
            "feedbackPorOpcao": [
              "A Pós-impressão não tem como saber de onde veio cada peça. Isso causa troca.",
              "Isso mistura os pedidos.",
              "Uma tarefa sem registro fica perdida.",
              null
            ],
            "erroCriticoOpcoes": [
              0,
              1
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "liberacao_pos",
            "local": "Estação de impressão e Pós-impressão (área física)",
            "instrucao": "Monte uma entrega de treino com peças de treino. Separe por tarefa de faz de conta, identifique e conte. Deixe pronta para a Pós-impressão conferir sem adivinhar. Confirme quando um colega ou o líder conseguir conferir a quantidade e a origem só olhando."
          }
        ]
      },
      {
        "dia": 10,
        "titulo": "Missão Produção",
        "subtitulo": "Do arquivo à liberação em uma tarefa simulada",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "A missão",
            "texto": "Você vai receber uma tarefa simulada e passar por todo o caminho do curso: identificar o arquivo e a versão, conferir a quantidade e o material, preparar o fatiamento no padrão, fazer o checklist da máquina, simular o início, inspecionar o resultado e decidir se libera ou trata a falha."
          },
          {
            "tipo": "conteudo",
            "titulo": "Há um erro de propósito",
            "texto": "A missão tem pelo menos um erro colocado de propósito. A ideia é ver se você percebe e para antes de a dúvida virar desperdício. Lembre: não saber não é erro. Inventar é erro. Para liberar na prática real, o responsável precisa validar."
          },
          {
            "tipo": "cenario",
            "competencia": "liberacao_pos",
            "titulo": "Tarefa de produção com algo errado",
            "noInicial": "a",
            "nos": {
              "a": {
                "cliente": "Tarefa: 12 peças em resina, versão 3 do arquivo. No fatiador está aberto o arquivo da versão 2, com 10 peças na plataforma.",
                "opcoes": [
                  {
                    "label": "Imprimir 10 e depois fazer 2 à parte.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "A versão e a quantidade não batem com a tarefa. Seguir é usar o arquivo errado."
                  },
                  {
                    "label": "Parar, não preparar nada e avisar o responsável sobre a versão e a quantidade.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Você percebeu antes de iniciar.",
                    "proximo": "b"
                  },
                  {
                    "label": "Usar a versão 2, que é a que já está aberta.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Arquivo ou versão errada é erro crítico."
                  },
                  {
                    "label": "Mudar a quantidade do arquivo para 12 e usar a versão 2.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Acerta a quantidade, mas o arquivo continua errado."
                  }
                ]
              },
              "b": {
                "cliente": "O arquivo certo foi liberado. Você faz o checklist da máquina e vê resto endurecido no tanque.",
                "opcoes": [
                  {
                    "label": "Iniciar mesmo assim para não perder tempo.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Máquina fora do normal se trata antes de iniciar."
                  },
                  {
                    "label": "Não iniciar, avisar e cuidar do tanque pelo procedimento da Valente.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Isso. Primeiro o estado da máquina.",
                    "proximo": "c"
                  },
                  {
                    "label": "Limpar com o que tiver à mão e iniciar.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Improvisar pode estragar o FEP."
                  },
                  {
                    "label": "Tocar em Concluir tarefa para mostrar que há problema.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Concluir quer dizer que foi feito."
                  }
                ]
              },
              "c": {
                "cliente": "A impressão terminou. A bandeja tem 12 lugares: 11 peças boas e 1 com suporte quebrado e parte faltando.",
                "opcoes": [
                  {
                    "label": "Registrar 11 boas e 1 falha com o motivo, separar a peça ruim e avisar o responsável antes de liberar.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Registro verdadeiro e falha tratada."
                  },
                  {
                    "label": "Registrar 12 concluídas.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Registrar o que não existe é erro crítico."
                  },
                  {
                    "label": "Liberar as 12 juntas, porque a Pós-impressão vai notar.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Mistura peça reprovada com aprovada."
                  },
                  {
                    "label": "Jogar fora a peça ruim sem registro.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Sem registro, ninguém procura a causa."
                  }
                ]
              }
            }
          },
          {
            "tipo": "missao",
            "competencia": "liberacao_pos",
            "titulo": "Missão Produção: da tarefa à liberação",
            "objetivo": "Passar por todo o caminho da produção em uma tarefa simulada, perceber o que está errado e decidir com segurança.",
            "contexto": "Você recebeu uma tarefa simulada de peças em resina. Há pelo menos um erro colocado de propósito na tarefa, no arquivo, na quantidade, no material ou no resultado. Nada é produzido de verdade e nenhum dado real muda.",
            "tarefas": [
              "Identifique a tarefa e confira arquivo, versão, quantidade e material.",
              "Diga o que você conferiria na prévia do fatiamento. Não invente parâmetros. Use o perfil da Valente.",
              "Passe pelo checklist da máquina e diga o que faria se algo estivesse fora do normal.",
              "Simule Iniciar tarefa, acompanhe e diga quando usaria Pausar e Retomar.",
              "Inspecione o resultado mostrado e conte. Na janela de conclusão da impressão, escolha a resposta certa (Tudo certo, Saiu só parte, Falhou ou Cancelada) e registre a fornada e a falha com o motivo.",
              "Decida se libera ou trata a falha. Diga como entregaria à Pós-impressão com identificação."
            ],
            "criterioConclusao": "Você apontou o erro, parou antes de gastar material, registrou a quantidade real e a falha com o motivo, e só liberou o que estava aprovado. Para liberar na prática real, o responsável precisa validar."
          }
        ]
      }
    ]
  },
  "pos_impressao": {
    "id": "pos_impressao",
    "nome": "Pós-impressão e Acabamento",
    "descricao": "Aprenda a tratar, inspecionar e entregar peças de resina e FDM com segurança, qualidade e organização.",
    "icone": "🧰",
    "versao": 3,
    "cargosPermitidos": null,
    "competencias": [
      "Organização da bancada",
      "Conferência de recebimento",
      "Segurança com resina",
      "Remoção de suportes",
      "Acabamento de superfície",
      "Qualidade e entrega"
    ],
    "criteriosConclusao": "Demonstrar limpeza e conferência segura em exercício supervisionado; identificar defeitos e registrar problemas. A conclusão exige verificação prática do responsável.",
    "dias": [
      {
        "dia": 1,
        "titulo": "Minha bancada",
        "subtitulo": "Ferramentas, EPIs e organização do posto",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Pós-impressão: o que acontece aqui",
            "texto": "A peça sai da impressora 3D ainda bruta. Ela pode ter suportes, que são apoios que seguraram a peça durante a impressão. Pode ter também restos de resina, rebarbas, marcas de camada e pequenos defeitos. O pós-impressão deixa essa peça pronta para a Pintura. No Kanban, essa etapa se chama Pós-impressão e fica entre Imprimindo e Pintura. Cada processo tem riscos e uma ordem certa. Nunca use produto, ferramenta ou equipamento sem saber para que serve e sem ter o procedimento autorizado."
          },
          {
            "tipo": "conteudo",
            "titulo": "EPI e ventilação vêm primeiro",
            "texto": "EPI quer dizer equipamento de proteção individual. Regra geral: para mexer com resina líquida ou ainda não curada (não endurecida), use luvas adequadas e proteção nos olhos, em local ventilado. Resina pode irritar a pele e os olhos. Solventes como o álcool isopropílico soltam vapores e pegam fogo. Ao lixar, a poeira pede proteção nos olhos e na respiração. Ao cortar suportes, uma lasca pode saltar. Quais EPIs usar, de que tipo e em qual etapa: vale o procedimento da Valente. Se faltar EPI, não comece."
          },
          {
            "tipo": "conteudo",
            "titulo": "Bancada organizada é controle de qualidade",
            "texto": "Bancada bagunçada mistura peças de pedidos diferentes, perde peças pequenas, suja áreas limpas com poeira ou resina e causa acidentes. Pense em três zonas. Uma onde a peça entra. Uma onde ela fica durante cada processo (limpeza, cura, lixamento). E uma onde ela espera para sair. Em todas, a peça continua ligada à tarefa do Valente OS, que tem título, instruções, checklist e quantidade. Peça sem identificação obriga alguém a adivinhar."
          },
          {
            "tipo": "conteudo",
            "titulo": "Sua tarefa no Valente OS",
            "texto": "Cada tarefa tem os botões Iniciar tarefa, Pausar, Retomar e Concluir tarefa. O PIN mostra quem está fazendo a tarefa. Seu nome aparece no topo da tela e fica gravado como responsável pelo que você inicia e conclui. Por isso, use sempre o seu PIN. Nunca use o de outra pessoa. No topo da tarefa fica a caixa SUA MISSÃO, em destaque. Ela diz o que você deve fazer e a quantidade. Abaixo ficam o checklist e as fotos de referência da peça."
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "organizacao_bancada",
            "pergunta": "Marque o que é regra de uma bancada de pós-impressão segura e organizada.",
            "itens": [
              "Luvas e proteção nos olhos à mão antes de abrir qualquer pote de resina ou solvente",
              "Peças de pedidos diferentes na mesma bandeja para ganhar espaço",
              "Ventilação do ambiente conferida antes de começar",
              "Usar a ferramenta que estiver mais perto, mesmo sem saber para que serve",
              "Cada peça identificada com a tarefa durante todo o processo"
            ],
            "corretos": [
              0,
              2,
              4
            ],
            "feedbackCerto": "Isso mesmo. EPI, ventilação e identificação pela tarefa são a base do posto.",
            "feedbackErrado": "Misturar pedidos e usar ferramenta sem saber para que serve são erros que causam perda e acidente."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "organizacao_bancada",
            "pergunta": "Você precisa parar um lote de peças para atender o telefone. O que fazer com as peças que estão na bancada?",
            "opcoes": [
              "Deixar na zona do processo, identificadas com a tarefa, e guardar solventes e resina fechados",
              "Misturar todas numa caixa para liberar a mesa",
              "Deixar espalhadas, porque você volta em um minuto",
              "Jogar um pano por cima para proteger da poeira"
            ],
            "correta": 0,
            "feedbackCerto": "Certo. Identificação e recipientes fechados evitam troca de peças e acidentes.",
            "feedbackPorOpcao": [
              null,
              "Misturar peças de tarefas diferentes é a causa mais comum de troca de peças.",
              "Um minuto vira dez. Peças soltas se misturam ou se perdem.",
              "O pano pode sujar a peça e não resolve a identificação."
            ],
            "erroCriticoOpcoes": [
              1
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "organizacao_bancada",
            "local": "Bancada de pós-impressão (área física)",
            "instrucao": "Com seu líder ou um colega experiente, aponte na bancada onde a peça entra, onde fica em cada processo (limpeza, cura, lixamento) e onde espera para sair. Mostre como ela continua ligada à tarefa. Confirme onde ficam os EPIs. Só marque como feito depois de ver cada ponto."
          }
        ]
      },
      {
        "dia": 2,
        "titulo": "O que estou recebendo",
        "subtitulo": "Conferir antes de trabalhar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Conte antes de tocar",
            "texto": "Antes de tirar suporte ou lixar, descubra o que você está recebendo. Veja qual é o pedido e a tarefa, a quantidade e os componentes, que são as partes da peça. Depois compare o que chegou com o que deveria chegar. Essa conferência leva poucos minutos. Ela evita o pior: trabalhar em metade do conjunto e só depois ver que falta o resto."
          },
          {
            "tipo": "conteudo",
            "titulo": "Um exemplo",
            "texto": "Um conjunto deveria ter corpo, base e dois acessórios. Chegou só o corpo. Começar assim mesmo parece adiantar o serviço. Mas você pode estar tratando uma peça do lote errado. Ou a base pode ter ficado na impressora, quebrada ou na fila para imprimir de novo. Descobrir a falta depois mistura os tempos de cada componente e dificulta saber onde cada peça está."
          },
          {
            "tipo": "conteudo",
            "titulo": "Como agir",
            "texto": "Abra a tarefa no Valente OS e comece pela caixa SUA MISSÃO, no topo. Ela diz o que fazer e quantas unidades. Depois leia título, instruções, checklist, fotos de referência e quantidade. Conte as peças e identifique cada componente. Se a conta não fecha, não improvise. Não pense que alguém vai trazer depois. Registre a diferença e consulte o responsável pela etapa anterior ou o seu líder. Dizer que não sabe de onde veio a peça não é erro. Seguir adiante sem saber é erro."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "conferencia_recebimento",
            "cliente": "Colega da impressão: \"Deixei o corpo do conjunto na sua bancada. A base e os acessórios saem mais tarde. Já pode ir tirando os suportes.\" A tarefa lista corpo, base e dois acessórios.",
            "opcoes": [
              {
                "label": "Começo agora pelo corpo e junto o resto quando chegar.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Pode até dar certo. Mas, sem confirmar o resto, você não sabe se os outros componentes existem ou se virão no mesmo estado."
              },
              {
                "label": "Confiro na tarefa e peço para registrar que o conjunto está incompleto e quando chega o resto, antes de começar.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. Você confere, deixa a diferença registrada e só então trabalha."
              },
              {
                "label": "Marco a tarefa como concluída para não perder o prazo.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Marcar como feito o que não foi feito é erro crítico."
              },
              {
                "label": "Pergunto a outro colega e faço o que ele achar melhor.",
                "correta": false,
                "erroCritico": false,
                "feedback": "A informação certa está na tarefa e com o responsável pela etapa anterior, não na opinião de outros."
              }
            ]
          },
          {
            "tipo": "ordenar",
            "competencia": "conferencia_recebimento",
            "instrucao": "Coloque na ordem a conferência de recebimento.",
            "itens": [
              "Identificar pedido e tarefa",
              "Ler na tarefa a quantidade e os componentes",
              "Contar e identificar o que chegou",
              "Comparar o que chegou com o esperado",
              "Se faltar ou sobrar algo, registrar e consultar antes de trabalhar"
            ],
            "feedbackCerto": "Perfeito. Primeiro saber o que deveria vir, depois conferir o que veio.",
            "feedbackErrado": "A ordem é: identificar a tarefa, ler o esperado, contar o que chegou, comparar e só então decidir."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "conferencia_recebimento",
            "local": "Valente OS: aba Tarefas no computador ou Minhas funções no tablet (só consulta)",
            "instrucao": "Abra uma tarefa só para olhar, sem mudar nada. Leia a caixa SUA MISSÃO no topo, o título, a quantidade e os componentes. Explique ao seu líder o que você conferiria na peça antes de começar. No treinamento, não toque em Iniciar tarefa nem em Concluir tarefa."
          }
        ]
      },
      {
        "dia": 3,
        "titulo": "Resina: limpeza e cura",
        "subtitulo": "Lavagem, cura UV, segurança e descarte",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Por que lavar e curar",
            "texto": "A peça de resina sai da impressora coberta de resina líquida, ainda não curada. Curar é terminar de endurecer o material com luz UV. Primeiro você lava a peça para tirar a resina que sobrou. Depois cura. Peça mal lavada fica pegajosa e com acabamento ruim. Peça mal curada pode ficar frágil, entortar ou manter resina que irrita a pele. Cura demais também pode dar problema. Por isso, tempo, produto e método não se improvisam."
          },
          {
            "tipo": "conteudo",
            "titulo": "Limpeza: prática geral",
            "texto": "Um jeito comum é lavar a peça em álcool isopropílico, chamado IPA, em recipiente próprio e fechado. Depois, secar bem. Use luvas adequadas e proteção nos olhos. Trabalhe com ventilação. O IPA pega fogo: mantenha longe de calor e de faísca. Não deixe a peça de molho por mais tempo do que o procedimento manda. Isso pode estragar o material. Produto, tempo, número de banhos e método: siga o procedimento da Valente ou consulte o responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "Cura UV e descarte",
            "texto": "A cura usa luz UV em equipamento próprio. Evite olhar para a luz e use a proteção indicada. Tempo e posição seguem o procedimento da Valente para cada resina. Nunca vá no palpite. Descarte: resina líquida, IPA sujo e panos ou luvas contaminados não vão para a pia, o ralo ou o lixo comum. Eles têm destino próprio, conforme o procedimento de descarte da empresa e a lei local. Na dúvida sobre onde jogar, pergunte antes."
          },
          {
            "tipo": "ordenar",
            "competencia": "seguranca_resina",
            "instrucao": "Coloque na ordem segura a limpeza e a cura de uma peça de resina.",
            "itens": [
              "Colocar luvas e proteção nos olhos e conferir a ventilação",
              "Lavar a peça conforme o procedimento",
              "Secar e conferir que não ficou resina líquida ou pegajosa",
              "Curar conforme o procedimento",
              "Descartar líquidos e materiais contaminados no local certo"
            ],
            "feedbackCerto": "Certo. EPI antes de tudo. O descarte certo fecha o processo.",
            "feedbackErrado": "A ordem é: EPI, lavagem, secagem e conferência, cura e descarte no local certo."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "seguranca_resina",
            "cliente": "Colega novo: \"Não lembro quanto tempo essa resina fica na cura. Coloca uns minutinhos que sempre dá certo, né?\"",
            "opcoes": [
              {
                "label": "Sim, uns minutos costumam bastar.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Inventar tempo de cura é erro crítico. Cada material tem seu procedimento."
              },
              {
                "label": "Melhor deixar bastante tempo. Cura a mais nunca faz mal.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Cura demais também pode estragar a peça."
              },
              {
                "label": "Vamos olhar o procedimento da Valente para essa resina ou perguntar ao responsável.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. Quando falta informação, consulte a fonte."
              },
              {
                "label": "Vai pelo cheiro: se ainda tem cheiro, curou pouco.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Cheiro não serve para saber se curou."
              }
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "seguranca_resina",
            "afirmacao": "Se o IPA da lavagem ficou sujo de resina, o certo é jogar no ralo com bastante água.",
            "correta": false,
            "feedbackCerto": "Certo. Líquido contaminado tem descarte próprio, definido pelo procedimento da empresa.",
            "feedbackErrado": "Não. IPA sujo de resina não vai para o ralo. Siga o procedimento de descarte da Valente."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "seguranca_resina",
            "local": "Área de lavagem e cura (física) e procedimento da Valente",
            "instrucao": "Com seu líder, encontre os EPIs, o recipiente de lavagem, o equipamento de cura e o local de descarte. Peça para ver o procedimento oficial de lavagem e cura. Confirme que você sabe onde estão os tempos e os produtos aprovados. Não mexa com resina sem supervisão."
          }
        ]
      },
      {
        "dia": 4,
        "titulo": "Remoção de suportes",
        "subtitulo": "Retirar sem quebrar detalhes",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que são suportes",
            "texto": "Suportes são pequenas hastes que seguram partes da peça no ar durante a impressão. Eles são necessários. Mas ficam presos à peça por pontas finas e deixam marcas quando saem. Tirar suporte é um trabalho delicado. Força demais arranca pedaços da peça. E os detalhes perdidos não voltam."
          },
          {
            "tipo": "conteudo",
            "titulo": "Onde olhar primeiro",
            "texto": "Suporte perto de dedo, arma, penacho, orelha ou outro detalhe fino pede muito mais cuidado do que suporte em uma base grossa. Antes de tocar, olhe a peça por todos os lados e guarde na cabeça os pontos frágeis. Planeje a ordem. Comece pelos suportes grandes, nas áreas fortes. Deixe os delicados para depois, quando a peça já estiver mais livre."
          },
          {
            "tipo": "conteudo",
            "titulo": "Como remover com segurança",
            "texto": "Use as ferramentas indicadas no procedimento, como alicate de corte fino ou lâmina. Corte sempre para longe do corpo e das mãos. Use proteção nos olhos, porque lascas saltam. Corte o suporte rente, mas sem entrar na peça. Não puxe e não torça. Se o suporte não sair sem risco, pare e consulte antes de quebrar. Se for resina, siga o procedimento da Valente sobre tirar os suportes antes ou depois da cura (o endurecimento com luz UV)."
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "remocao_suportes",
            "pergunta": "Marque os pontos que pedem mais cuidado ao tirar suportes.",
            "itens": [
              "Suporte encostado em um dedo fino",
              "Suporte em uma base larga e grossa",
              "Suporte embaixo da ponta de um penacho",
              "Suporte na parte de baixo, reta, da peça",
              "Suporte junto a uma espada fina"
            ],
            "corretos": [
              0,
              2,
              4
            ],
            "feedbackCerto": "Certo. Detalhes finos quebram com facilidade.",
            "feedbackErrado": "Áreas grossas aguentam mais. O risco está nos detalhes finos."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "remocao_suportes",
            "pergunta": "Um suporte está colado na ponta de um dedo da peça. Você sente que, se puxar, o dedo vai junto. O que fazer?",
            "opcoes": [
              "Puxar mais rápido para sair de uma vez",
              "Deixar o suporte e mandar para a Pintura assim",
              "Torcer até soltar e colar o dedo se quebrar",
              "Parar, olhar bem o ponto e consultar o responsável antes de continuar"
            ],
            "correta": 3,
            "feedbackCerto": "Certo. Consultar antes de quebrar é a regra.",
            "feedbackPorOpcao": [
              "Pressa e força aumentam a chance de quebrar.",
              "Passar adiante um defeito conhecido joga o problema para a Pintura.",
              "Torcer e colar depois é aceitar o defeito.",
              null
            ],
            "erroCriticoOpcoes": [
              1
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "remocao_suportes",
            "pergunta": "Você vai tirar os suportes de uma figura com espada fina, capa e base larga. Qual é o plano certo?",
            "opcoes": [
              "Começar pela espada, que é a parte mais difícil, e deixar a base para o fim",
              "Começar pela base e, se o suporte da espada não sair, puxar com força",
              "Com proteção nos olhos, começar pela base, deixar a espada por último e consultar se houver risco de quebrar",
              "Tirar os suportes com a mão, sem ferramenta, para não riscar a peça"
            ],
            "correta": 2,
            "feedbackCerto": "Certo. Primeiro as áreas fortes, por último os pontos frágeis. Sempre com proteção nos olhos e a ferramenta indicada.",
            "feedbackErrado": "Comece pelas áreas fortes, como a base. Deixe a espada por último. Use proteção nos olhos e a ferramenta indicada. Pare e consulte se houver risco de quebrar."
          }
        ]
      },
      {
        "dia": 5,
        "titulo": "FDM: remoção e limpeza",
        "subtitulo": "Suportes, rebarbas e áreas funcionais",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Como a peça FDM chega",
            "texto": "FDM é um jeito de imprimir. A máquina derrete um fio de plástico, chamado filamento, e monta a peça camada por camada. A peça pode chegar com suportes, fios soltos, respingos, rebarbas na primeira camada e marcas de camada. Seu trabalho é preparar a superfície sem mudar as medidas nem os detalhes que têm função."
          },
          {
            "tipo": "conteudo",
            "titulo": "Estético ou funcional",
            "texto": "Antes de corrigir, separe dois tipos de área. Área estética é a que será vista. Ela pode ser lixada para ficar uniforme. Área funcional é a que tem uma função: encaixe, furo, pino, rosca, dobradiça. Lixar um encaixe sem entender a função dele pode aumentar a folga ou impedir a montagem. Na dúvida, consulte o modelo, a ficha ou a tarefa."
          },
          {
            "tipo": "conteudo",
            "titulo": "Cuidados práticos",
            "texto": "Para tirar suportes de FDM, use alicate ou lâmina com cuidado e proteção nos olhos. Peças de plástico podem estilhaçar. Tire os fios com a ferramenta adequada, não com a mão nua. Se for aquecer a superfície para alisar, siga o procedimento da Valente e cuide da ventilação. Evite a poeira de lixamento. A peça deve ficar limpa antes de seguir adiante."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "acabamento_superficie",
            "pergunta": "Uma peça FDM tem um pino de encaixe com uma rebarba na base. O que você faz primeiro?",
            "opcoes": [
              "Lixa o pino até ficar liso como o resto",
              "Vê que é área funcional e confere na ficha ou consulta antes de mexer",
              "Corta o pino fora, porque está feio",
              "Deixa como está, porque FDM sempre tem rebarba"
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Em área funcional, entenda antes de corrigir.",
            "feedbackPorOpcao": [
              "Lixar pode mudar a medida do encaixe.",
              null,
              "Tirar uma parte funcional inutiliza o conjunto.",
              "Rebarba em encaixe pode impedir a montagem. Não pode ser ignorada."
            ],
            "erroCriticoOpcoes": [
              0
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "acabamento_superficie",
            "afirmacao": "Em uma peça FDM, todas as marcas de camada devem ser lixadas até sumir, até nas áreas de encaixe.",
            "correta": false,
            "feedbackCerto": "Certo. Não lixe área funcional sem entender a função e a medida permitida.",
            "feedbackErrado": "Não. Lixar encaixes pode mudar medidas e impedir a montagem."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "acabamento_superficie",
            "local": "Peça FDM de treino na bancada",
            "instrucao": "Com seu líder, pegue uma peça FDM de treino e aponte quais áreas são estéticas e quais são funcionais. Diga o que faria em cada uma. Confirme com seu líder antes de qualquer corte ou lixamento."
          }
        ]
      },
      {
        "dia": 6,
        "titulo": "Lixamento e correção",
        "subtitulo": "Grãos, forma e referência",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Lixar não é deixar tudo liso",
            "texto": "Lixar é tirar marcas que não deveriam estar ali, como marcas de suporte, linhas de camada e rebarbas, sem mudar a forma da peça. O objetivo é preparar a peça para a montagem ou a pintura. Lixar demais apaga detalhes, afina paredes e muda medidas. Por isso, toda correção respeita a referência do modelo e a tolerância, que é a variação permitida na medida."
          },
          {
            "tipo": "conteudo",
            "titulo": "Do grão grosso ao fino",
            "texto": "As lixas têm grãos. Número menor é lixa mais grossa. Número maior é lixa mais fina. Comece com o grão mais grosso que for preciso para tirar a marca. Depois passe para grãos cada vez mais finos, sem pular muito. Cada grão apaga os riscos do anterior. Qual lixa usar e em qual ordem: siga o procedimento da Valente. Limpe a poeira entre as trocas, para que grãos grossos não risquem a peça de novo."
          },
          {
            "tipo": "conteudo",
            "titulo": "Defeito ou detalhe",
            "texto": "Uma dobra do uniforme faz parte do modelo. Uma marca de suporte não faz. Você precisa separar detalhe de defeito. Para isso, compare com a foto, a ficha e o modelo de referência. Para lixar, use proteção adequada nos olhos e na respiração, e ventilação. A poeira, principalmente a de resina, não deve ser respirada nem ficar na pele. Na dúvida, consulte. Material lixado não volta."
          },
          {
            "tipo": "ordenar",
            "competencia": "acabamento_superficie",
            "instrucao": "Coloque na ordem o lixamento de uma marca de suporte.",
            "itens": [
              "Colocar proteção nos olhos e na respiração e conferir a ventilação",
              "Comparar com a referência para confirmar que é defeito, não detalhe",
              "Lixar a marca com o grão mais grosso que for preciso",
              "Passar para um grão mais fino",
              "Limpar a poeira e conferir a superfície"
            ],
            "feedbackCerto": "Certo. Referência primeiro, depois do mais grosso ao mais fino.",
            "feedbackErrado": "A ordem é: EPI, confirmar o defeito, grão mais grosso, grão mais fino e limpeza."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "acabamento_superficie",
            "cliente": "Colega: \"Tem uma linha em relevo no peito dessa figura. Vou lixar tudo para ficar liso, né?\"",
            "opcoes": [
              {
                "label": "Vai, peça lisa é sempre melhor.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Liso nem sempre é certo. Pode ser detalhe do modelo."
              },
              {
                "label": "Antes, vamos conferir na foto ou na ficha se essa linha faz parte do modelo.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. A referência mostra o que é defeito."
              },
              {
                "label": "Lixa com um grão bem grosso para ser rápido.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Grão grosso em detalhe fino destrói o relevo."
              },
              {
                "label": "Pode lixar. A Pintura refaz o detalhe.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Passar trabalho com defeito para a Pintura resolver é erro crítico."
              }
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "acabamento_superficie",
            "pergunta": "Você vai lixar uma marca de suporte perto de um detalhe do uniforme. Qual é o jeito certo?",
            "opcoes": [
              "Comparar com a referência, usar proteção nos olhos e na respiração, com ventilação, e lixar do grão mais grosso para o mais fino",
              "Lixar a marca e o detalhe juntos, para tudo ficar liso",
              "Começar pelo grão mais fino e terminar com o mais grosso",
              "Lixar sem máscara, porque a marca é pequena e faz pouca poeira"
            ],
            "correta": 0,
            "feedbackCerto": "Certo. A referência mostra o que é defeito. Os grãos seguem o procedimento. Na dúvida sobre a tolerância, consulte.",
            "feedbackErrado": "Compare com a referência antes de lixar. Use proteção nos olhos e na respiração, com ventilação. Lixe do grão mais grosso para o mais fino, conforme o procedimento. Na dúvida, consulte."
          }
        ]
      },
      {
        "dia": 7,
        "titulo": "Montagem e encaixes",
        "subtitulo": "Testar antes de colar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Teste antes de colar",
            "texto": "Quando o processo permitir, teste o encaixe sem cola antes de montar. Encaixe a peça com cuidado e sinta. Ela entra com leve resistência, fica folgada ou trava? Esse teste mostra o problema enquanto ainda dá para corrigir."
          },
          {
            "tipo": "conteudo",
            "titulo": "Encaixe difícil tem causa",
            "texto": "Se o encaixe está apertado, pode ser resto de resina, rebarba ou suporte esquecido. Pode ser também peça deformada, peça trocada de outro conjunto ou problema de modelagem. Forçar até entrar pode esconder a causa e quebrar o encaixe ou a peça inteira. Peça quebrada por pressa é perda de material e de tempo."
          },
          {
            "tipo": "conteudo",
            "titulo": "Sequência de ação",
            "texto": "Teste, descubra a causa, corrija se estiver autorizado e consulte quando for preciso. Limpar um resto de resina ou tirar uma rebarba pode estar dentro do que você pode fazer. Mudar medida, refazer encaixe ou usar adesivo (cola) é decisão que segue o procedimento da Valente. Adesivos pedem ventilação, luvas e cuidado com os olhos. Se a causa for deformação ou modelagem, pare e consulte."
          },
          {
            "tipo": "conteudo",
            "titulo": "Pegando peças no estoque",
            "texto": "Nas tarefas de montagem aparece o botão Retirar do estoque. Ele mostra só o componente daquela tarefa, por exemplo a Saia. Quando a tarefa é da peça inteira, mostra todos os componentes. Você preenche o campo Quantas peças? e o sistema diz em qual endereço pegar, como G1-E01-P02-C03. Na Retirada guiada, os itens já pintados saem primeiro. Não pegue peça de memória nem de outro endereço. Siga o que o sistema indica."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "qualidade_entrega",
            "pergunta": "Ao testar um encaixe, o pino entra pela metade e trava. O que fazer?",
            "opcoes": [
              "Dar uma batida leve para entrar de vez",
              "Lixar o pino até entrar fácil, sem medir",
              "Procurar a causa, como resto de resina, rebarba ou peça trocada, e consultar se não resolver",
              "Colar assim mesmo, porque a cola preenche"
            ],
            "correta": 2,
            "feedbackCerto": "Certo. Descobrir a causa evita quebrar a peça.",
            "feedbackPorOpcao": [
              "A batida pode quebrar o pino ou o furo.",
              "Lixar sem medir muda a medida e deixa folga.",
              null,
              "Cola não corrige encaixe. Só esconde o problema."
            ],
            "erroCriticoOpcoes": [
              3
            ]
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "qualidade_entrega",
            "pergunta": "Marque as possíveis causas de um encaixe que não entra.",
            "itens": [
              "Resto de resina no furo",
              "Peça de outro conjunto misturada",
              "Peça deformada",
              "Falta de cola",
              "Rebarba no pino"
            ],
            "corretos": [
              0,
              1,
              2,
              4
            ],
            "feedbackCerto": "Certo. Primeiro se procura a causa. Cola não é causa.",
            "feedbackErrado": "Falta de cola não impede encaixe. Resto de resina, rebarba, peça trocada e deformação impedem."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "qualidade_entrega",
            "local": "Bancada de montagem (área física)",
            "instrucao": "Com um conjunto de treino e seu líder, teste o encaixe sem cola. Diga em voz alta o que sentiu, qual causa você suspeitaria se estivesse apertado e quando consultaria. Não use cola sem autorização."
          }
        ]
      },
      {
        "dia": 8,
        "titulo": "Controle de qualidade",
        "subtitulo": "Aprovar, corrigir ou consultar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que procurar",
            "texto": "No controle de qualidade, olhe a peça com atenção e boa luz. Procure bolhas, falhas de impressão, deformações, quebras, marcas fortes de suporte ou de lixa e componentes faltando. Compare com a referência. Faça isso antes da Pintura. Pintura não esconde defeito. Ela pode até deixar o defeito mais visível."
          },
          {
            "tipo": "conteudo",
            "titulo": "Pintura não é remendo",
            "texto": "Um braço quebrado ou uma superfície deformada pede uma decisão antes de seguir. Você pode usar massa de reparo e fazer pequenas correções quando isso estiver dentro do que você pode fazer e do procedimento da Valente. Reparo estrutural, que mexe na firmeza da peça, vai para consulta. Dúvida se o defeito é aceitável também. Se a massa tiver solvente ou soltar poeira ao lixar, use ventilação e EPI."
          },
          {
            "tipo": "conteudo",
            "titulo": "Três classificações",
            "texto": "Classifique cada peça em uma de três situações. Aprovada: sem defeito, pode seguir. Corrigível dentro da sua competência: você corrige e inspeciona de novo. Precisa de consulta ou reimpressão: o defeito vai além do que você pode decidir. A decisão de imprimir de novo segue o procedimento da Valente. Defeito escondido é erro. Defeito avisado é qualidade."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "qualidade_entrega",
            "cliente": "Seu líder de produção: \"Essa peça tem uma rachadura no ombro, mas a Pintura cobre. Manda logo, o prazo está apertado.\"",
            "opcoes": [
              {
                "label": "Envio e deixo a Pintura resolver.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Passar adiante peça com defeito estrutural é erro crítico."
              },
              {
                "label": "Explico que a rachadura é estrutural e peço a decisão sobre correção ou reimpressão antes de seguir.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. Você avisa o defeito e deixa a decisão com o responsável."
              },
              {
                "label": "Passo massa na rachadura e envio sem avisar.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Reparo estrutural sem autorização e sem avisar é esconder defeito."
              },
              {
                "label": "Descarto a peça por conta própria.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Descarte e reimpressão seguem a decisão e o procedimento da empresa."
              }
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "qualidade_entrega",
            "pergunta": "Qual destas peças você classificaria como corrigível dentro da sua competência?",
            "opcoes": [
              "Pequena marca de suporte que sobrou em área estética",
              "Braço quebrado ao meio, com a parte faltando",
              "Corpo deformado e empenado",
              "Conjunto sem a base"
            ],
            "correta": 0,
            "feedbackCerto": "Certo. Uma marca simples se resolve com lixamento, seguindo o procedimento.",
            "feedbackPorOpcao": [
              null,
              "Quebra com parte faltando precisa de decisão.",
              "Deformação estrutural pede consulta ou reimpressão.",
              "Componente faltando é caso de conferência e consulta, não de lixamento."
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "qualidade_entrega",
            "pergunta": "Três peças chegam à inspeção: uma com rebarba pequena, uma com bolha grande na face e uma sem o acessório. Qual classificação está certa?",
            "opcoes": [
              "As três são corrigíveis. Você mesmo resolve e manda para a Pintura",
              "Rebarba: aprovada. Bolha grande: corrigível. Sem acessório: consulta",
              "Rebarba: corrigível. Bolha grande: aprovada, a Pintura cobre. Sem acessório: consulta",
              "Rebarba: corrigível. Bolha grande: consulta. Sem acessório: consulta e registro"
            ],
            "correta": 3,
            "feedbackCerto": "Certo. Você corrige a rebarba pequena. A bolha grande e a falta do acessório vão para consulta. Nada segue para a Pintura com defeito conhecido.",
            "feedbackErrado": "Rebarba pequena você corrige. Bolha grande na face precisa de consulta. Falta de acessório precisa de consulta e registro. Nada segue para a Pintura com defeito conhecido."
          }
        ]
      },
      {
        "dia": 9,
        "titulo": "Entregando para Pintura",
        "subtitulo": "Kit completo, limpo e identificado",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que a Pintura precisa receber",
            "texto": "A Pintura precisa receber a peça limpa, identificada, completa e em bom estado. Sem restos de resina, sem poeira de lixa, sem suportes esquecidos, com todos os componentes e ligada à tarefa. A partir daí a peça é trabalho de outro setor. Um erro seu vira retrabalho dele."
          },
          {
            "tipo": "conteudo",
            "titulo": "O custo de passar errado",
            "texto": "Entregar uma peça com restos de resina ou sem um acessório passa o retrabalho para o próximo setor e pode atrasar o pedido inteiro. Tinta sobre superfície suja pode descascar ou ficar irregular. O acessório que falta só é descoberto tarde, quando a figura já está pintada."
          },
          {
            "tipo": "conteudo",
            "titulo": "Kit e conferência cruzada",
            "texto": "Kit é o conjunto dos componentes de um pedido. Mantenha o kit junto, por exemplo em um saco ou caixa identificada com a tarefa. Faça a conferência cruzada: você confere o kit e outra pessoa confere de novo, sozinha, comparando com a tarefa. Só depois toque em Concluir tarefa. O sistema abre a janela Concluir etapa e mostra qual é a próxima etapa. Peças pequenas saem em embalagem fechada para não se perderem."
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "qualidade_entrega",
            "pergunta": "Marque o que precisa estar certo antes de entregar para a Pintura.",
            "itens": [
              "Todos os componentes da tarefa presentes",
              "Peça sem poeira e sem resto de resina",
              "Identificação da tarefa junto ao kit",
              "Suportes ainda presos para proteger a peça",
              "Defeitos conhecidos avisados, não escondidos"
            ],
            "corretos": [
              0,
              1,
              2,
              4
            ],
            "feedbackCerto": "Isso mesmo. Completa, limpa e identificada.",
            "feedbackErrado": "Suporte esquecido é retrabalho para a Pintura. O kit deve ir limpo e completo."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "qualidade_entrega",
            "pergunta": "Para que serve a conferência cruzada na entrega do kit?",
            "opcoes": [
              "Para dividir a responsabilidade e conferir menos",
              "Para acelerar a entrega",
              "Para a Pintura não precisar conferir o que recebe",
              "Para uma segunda pessoa confirmar, sozinha, que o kit bate com a tarefa"
            ],
            "correta": 3,
            "feedbackCerto": "Certo. Uma segunda pessoa, olhando sozinha, acha o que a primeira não viu.",
            "feedbackPorOpcao": [
              "A responsabilidade continua sendo sua.",
              "Conferir de novo é cuidado, não pressa.",
              "A Pintura continua conferindo o que recebe.",
              null
            ]
          },
          {
            "tipo": "conteudo",
            "titulo": "A janela Concluir etapa",
            "texto": "Quando você toca em Concluir tarefa numa etapa de produção, o sistema abre a janela Concluir etapa. Nela você informa quantas peças ficaram prontas e quantas precisam voltar para a fase anterior, com o motivo. A janela também mostra qual é a próxima etapa. Se a quantidade da tarefa é 1, aparecem só dois botões: Etapa concluída e Houve problema. Informe o que aconteceu de verdade. Contar como pronta uma peça com defeito é marcar como feito o que não foi feito."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "qualidade_entrega",
            "pergunta": "A tarefa pede 3 conjuntos. Dois estão limpos e completos. Um tem rachadura no braço, já avisada ao responsável. Ao tocar em Concluir tarefa, o que você informa na janela Concluir etapa?",
            "opcoes": [
              "3 prontas, e avisa a rachadura só por conversa",
              "2 prontas e 0 voltando, para não atrasar o pedido",
              "2 prontas e 1 voltando para a fase anterior, com o motivo",
              "0 prontas, porque um conjunto tem problema"
            ],
            "correta": 2,
            "feedbackCerto": "Certo. O sistema separa o que está pronto do que volta. O motivo fica registrado.",
            "feedbackPorOpcao": [
              "Contar peça com defeito como pronta e avisar só de boca é esconder defeito no sistema.",
              "Peça com defeito não pode seguir como pronta. A janela serve para registrar o que volta.",
              null,
              "Os dois conjuntos bons estão prontos e devem ser contados como prontos."
            ],
            "erroCriticoOpcoes": [
              0,
              1
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "qualidade_entrega",
            "local": "Bancada de entrega (área física)",
            "instrucao": "Com um conjunto de treino, monte um kit de entrega identificado com a tarefa. Peça a um colega ou ao líder para fazer a conferência cruzada, comparando com a lista de componentes. Anote qualquer diferença encontrada."
          }
        ]
      },
      {
        "dia": 10,
        "titulo": "Missão Pós-impressão",
        "subtitulo": "Do recebimento à entrega",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "A missão",
            "texto": "Você vai usar o curso inteiro em uma situação simulada: receber, conferir, tratar, inspecionar e decidir o que segue. O que mais conta é saber parar diante de um defeito. Não é a pressa de mandar tudo para a Pintura. Nenhum dado real é alterado."
          },
          {
            "tipo": "conteudo",
            "titulo": "Como será avaliado",
            "texto": "Cada decisão tem consequência: conferir antes de trabalhar, se proteger, respeitar a referência e avisar os defeitos. Nenhuma resposta depende de tempo, produto ou número específico da Valente. Quando faltar informação, a resposta certa é consultar o procedimento ou o responsável."
          },
          {
            "tipo": "cenario",
            "competencia": "qualidade_entrega",
            "titulo": "Pedido simulado: figura com base e 2 acessórios",
            "noInicial": "a",
            "nos": {
              "a": {
                "cliente": "Você recebe a tarefa de 3 conjuntos de resina. Cada um tem figura, base e dois acessórios. Na bancada chegaram 3 figuras, 3 bases e 5 acessórios. O que você faz?",
                "opcoes": [
                  {
                    "label": "Começa a limpar e lixar as figuras. Os acessórios ficam para depois.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Trabalhar sem fechar a conta mistura tudo e esconde a falta.",
                    "proximo": "b"
                  },
                  {
                    "label": "Confere com a tarefa, vê que falta um acessório, registra e consulta antes de seguir.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Conferir antes de trabalhar.",
                    "proximo": "b"
                  },
                  {
                    "label": "Acha que 5 está perto de 6 e segue.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Supor que está completo é erro crítico.",
                    "proximo": "b"
                  },
                  {
                    "label": "Junta peças de outros pedidos para completar.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Misturar peças de outro pedido é erro crítico.",
                    "proximo": "b"
                  }
                ]
              },
              "b": {
                "cliente": "Na hora de lavar a resina, você vê que não tem luvas adequadas à mão e que o exaustor, que puxa o ar, está desligado. O que você faz?",
                "opcoes": [
                  {
                    "label": "Lava rápido sem luvas e liga o exaustor depois.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Deixar de lado EPI e ventilação com resina e IPA é erro crítico.",
                    "proximo": "c"
                  },
                  {
                    "label": "Para, coloca o EPI, ventila o ambiente, segue o procedimento de lavagem e cura e descarta o IPA sujo no local certo.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Segurança vem antes da produção.",
                    "proximo": "c"
                  },
                  {
                    "label": "Pede a um colega para lavar sem proteção.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Pôr outro em risco é erro crítico.",
                    "proximo": "c"
                  },
                  {
                    "label": "Despeja o IPA sujo na pia no final.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Descarte tem local próprio.",
                    "proximo": "c"
                  }
                ]
              },
              "c": {
                "cliente": "Na inspeção, uma das figuras tem uma rachadura no braço. As outras duas estão limpas. O prazo está apertado. O que você faz?",
                "opcoes": [
                  {
                    "label": "Passa massa e envia as três para a Pintura sem avisar.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Esconder defeito é erro crítico."
                  },
                  {
                    "label": "Envia as duas aprovadas, segura a peça rachada e avisa o defeito para decisão. Em Concluir etapa, informa 2 prontas e 1 que volta para a fase anterior, com o motivo.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Parar diante do defeito e avisar."
                  },
                  {
                    "label": "Envia as três, porque a Pintura cobre.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Pintura não esconde falha estrutural."
                  },
                  {
                    "label": "Descarta a figura por conta própria.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Quem decide é o procedimento da Valente e o responsável."
                  }
                ]
              }
            }
          },
          {
            "tipo": "missao",
            "competencia": "qualidade_entrega",
            "titulo": "Missão Pós-impressão",
            "objetivo": "Mostrar que você leva um conjunto do recebimento à entrega com segurança e qualidade, sabendo parar e consultar.",
            "contexto": "Pedido de treino: 3 conjuntos de resina, cada um com figura, base e 2 acessórios. A tarefa diz a quantidade e os componentes. Um supervisor acompanha, porque a prática real exige supervisão e procedimentos de segurança aprovados.",
            "tarefas": [
              "Conferir o que chegou com a tarefa, contando e identificando cada componente, e registrar as diferenças",
              "Conferir EPIs e ventilação e explicar como seria a lavagem, a cura e o descarte conforme o procedimento da Valente",
              "Planejar a retirada dos suportes, apontando os pontos frágeis, e a ordem das lixas, do grão mais grosso ao mais fino",
              "Testar o encaixe sem cola e inspecionar defeitos, classificando cada peça como aprovada, corrigível ou consulta",
              "Montar o kit de entrega identificado com a tarefa, fazer a conferência cruzada, avisar qualquer defeito antes de seguir e explicar como preencheria a janela Concluir etapa (quantas prontas, quantas voltam para a fase anterior, com o motivo)"
            ],
            "criterioConclusao": "Você conferiu na entrada, usou EPI e ventilação, não inventou tempos nem produtos, parou diante dos defeitos, avisou e entregou um kit limpo, completo e identificado."
          }
        ]
      }
    ]
  },
  "pintura": {
    "id": "pintura",
    "nome": "Pintura",
    "descricao": "Aprenda a preparar, pintar, corrigir e inspecionar miniaturas seguindo a referência numerada da Valente.",
    "icone": "🎨",
    "versao": 3,
    "cargosPermitidos": null,
    "competencias": [
      "Estação de pintura",
      "Leitura do pedido",
      "Preparação da superfície",
      "Fidelidade à cor",
      "Técnicas de pintura",
      "Inspeção e liberação"
    ],
    "criteriosConclusao": "Interpretar referências, demonstrar preparo e acabamento em peça de treino, identificar falhas e explicar os cuidados. O responsável avalia a qualidade antes de liberar trabalho independente.",
    "dias": [
      {
        "dia": 1,
        "titulo": "Minha estação de pintura",
        "subtitulo": "Materiais, referências, proteção e organização",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que existe na estação",
            "texto": "Na estação de pintura você encontra tintas, pincéis de vários formatos e a paleta ou godê, que serve para misturar e apoiar a tinta. Tem também água ou diluente para limpar e afinar a tinta, papel absorvente e luz boa. Quando a Valente usa, tem o aerógrafo, uma pequena pistola que borrifa tinta bem fina. Cada material tem um uso. Use só tintas, diluentes e ferramentas autorizados pela Valente. Não conhece um item? Pergunte antes de usar."
          },
          {
            "tipo": "conteudo",
            "titulo": "A referência oficial é o pote",
            "texto": "Na Valente, cada cor tem um número, de Cor 01 a Cor 33. O número fica na etiqueta do pote. A tarefa de pintura mostra as fotos de referência da peça. A tela de Cores, no computador ou no tablet Samsung, mostra as cores numeradas. A tela pode mudar o tom da cor. Por isso, o número do pote vale mais que a cor que você vê na tela. A prateleira pode ter três tipos de verde. Confira sempre a etiqueta. Não confie só no olho."
          },
          {
            "tipo": "conteudo",
            "titulo": "Por que não usar a cor parecida",
            "texto": "Não use a cor que parece mais próxima sem conferir o número. Isso quebra o padrão entre as peças do mesmo lote. O cliente recebe miniaturas que deviam ser iguais e vê uma diferente. O pote da cor pedida acabou ou está sem etiqueta? Não troque por outro. Avise o responsável e siga o procedimento da Valente."
          },
          {
            "tipo": "conteudo",
            "titulo": "EPI, ventilação e organização",
            "texto": "EPI é o equipamento de proteção, como luvas e máscara. Tintas e solventes pedem lugar ventilado. Quando o procedimento mandar, use luvas e a máscara certa. No aerógrafo e ao lixar, o cuidado com pó e névoa é maior. Deixe os potes tampados, os pincéis limpos e separados por uso, e a bancada livre. As peças que esperam pintura ficam na área indicada. Não mexa nas peças de pedido real durante o treino. Tem dúvida sobre um material? Consulte o responsável."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "preparacao_estacao",
            "pergunta": "A referência da tarefa mostra um verde em uma parte da peça. Na prateleira há três potes de verde diferentes. Como escolher o certo?",
            "opcoes": [
              "Escolher o verde mais parecido com o que aparece na tela",
              "Misturar os três verdes até chegar perto da imagem",
              "Usar o pote que tem na etiqueta o mesmo número de Cor indicado para aquela parte",
              "Usar o verde que você já usou em outra peça parecida"
            ],
            "correta": 2,
            "feedbackCerto": "Isso mesmo. O número é a referência. A cor na tela pode estar diferente.",
            "feedbackPorOpcao": [
              "A tela muda o tom da cor. Compare os números, não o que parece.",
              "Misturar sem receita oficial quebra o padrão do lote.",
              null,
              "A memória não vale mais que o número indicado para este pedido."
            ],
            "erroCriticoOpcoes": [
              3
            ]
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "preparacao_estacao",
            "pergunta": "Quais itens fazem parte de uma estação de pintura organizada e segura?",
            "itens": [
              "Potes tampados, com etiqueta de Cor fácil de ler",
              "Lugar ventilado e EPI conforme o procedimento",
              "Peça de pedido real usada para testar pincel",
              "Pincéis limpos, separados por uso",
              "Pote sem etiqueta usado porque parece a cor certa"
            ],
            "corretos": [
              0,
              1,
              3
            ],
            "feedbackCerto": "Certo. Etiqueta fácil de ler, ventilação e pincéis limpos protegem você e o padrão.",
            "feedbackErrado": "Peça de pedido real não é lugar de teste. E pote sem etiqueta não é referência confiável."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "preparacao_estacao",
            "local": "No computador ou no tablet Samsung, com o responsável, e na prateleira de tintas",
            "instrucao": "Não altere nenhum trabalho real. Junto com o responsável, só olhando, veja em uma tarefa de pintura as fotos de referência e o número de Cor de uma parte, e confira esse número na tela de Cores. Depois ache na prateleira o pote com esse número. Ache também a área das peças que esperam pintura. Confirme que fez a consulta."
          }
        ]
      },
      {
        "dia": 2,
        "titulo": "Entendendo o que vou pintar",
        "subtitulo": "Pedido, tarefa, referência e versão certa",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Pintura começa na leitura",
            "texto": "Antes de abrir qualquer tinta, entenda o trabalho. Veja o pedido no Kanban, na coluna Pintura. Veja a tarefa na aba Tarefas, no computador, ou em Minhas funções, no tablet. A tarefa tem título, instruções, checklist e quantidade. Veja também a imagem de referência, o número de Cor de cada parte, os componentes da peça e as observações do pedido."
          },
          {
            "tipo": "conteudo",
            "titulo": "Sua missão na tela da tarefa",
            "texto": "Ao abrir uma tarefa de pintura, você vê no topo a caixa SUA MISSÃO, em destaque. Exemplo: Pintar 8 de 18 unidades de Saia da peça Aluno Colégio Militar Menina. Quando a tarefa já andou, a caixa mostra o que FALTA (8 de 18) e a linha Já feitas nesta tarefa: 10. Mostra também quantas unidades o pedido precisa, quantas já foram pintadas antes e quantas impressas estão disponíveis. O seu PIN mostra quem está fazendo a tarefa. Seu nome aparece no topo e fica gravado como responsável pelo que você inicia ou conclui."
          },
          {
            "tipo": "conteudo",
            "titulo": "Pegar as peças e achar a próxima tarefa",
            "texto": "Para buscar peças, toque no botão 📦 Retirar do estoque, dentro da tarefa. Ele mostra só o componente da tarefa, por exemplo Saia. Se a tarefa é da peça inteira, mostra todos os componentes. Depois ele pergunta Quantas peças? A retirada guiada mostra o endereço de cada componente e leva os itens para a Mesa de separação. Na pintura, ela indica primeiro as peças sem pintura. No tablet, Minhas funções abre uma fila só, com as tarefas da sua função. Lá tem filtro por tipo, como Pintura, e o botão ▶ Próxima da fila. Outras funções mostra tarefas de colegas, para você ajudar."
          },
          {
            "tipo": "conteudo",
            "titulo": "Quem decide é a referência",
            "texto": "A mesma figura pode ter versões diferentes: outro uniforme, outro tom, um acessório a mais ou a menos. A memória do pintor não vale mais que a referência do pedido. Mesmo que você já tenha pintado aquele modelo cem vezes, confira qual versão está na sua frente e qual foi pedida."
          },
          {
            "tipo": "conteudo",
            "titulo": "Como agir",
            "texto": "Antes de abrir a tinta, confirme a versão da peça, a quantidade, as cores de cada parte e as observações. Falta alguma coisa ou uma informação não bate com a outra? Não adivinhe. Não saber é normal. Inventar é erro. Consulte a ficha e a tarefa. Se a dúvida continuar, pergunte ao responsável. Só depois comece."
          },
          {
            "tipo": "ordenar",
            "competencia": "leitura_pedido",
            "instrucao": "Coloque na ordem em que você deve conferir o trabalho antes de abrir qualquer tinta.",
            "itens": [
              "Abrir a tarefa e ler título, instruções e quantidade",
              "Ver a imagem de referência e o número de Cor de cada parte",
              "Comparar a peça que está na mão com a versão pedida",
              "Anotar as dúvidas e consultar o responsável se algo não bater",
              "Só depois separar os potes e começar"
            ],
            "feedbackCerto": "Isso mesmo. Primeiro entender, depois fazer.",
            "feedbackErrado": "A leitura vem antes da tinta. Veja a aula de novo: tarefa, referência, comparação, dúvidas e só depois começar."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "leitura_pedido",
            "pergunta": "Ontem você pintou uma figura de guerreiro. Hoje chega outro pedido do mesmo modelo. O que você faz para não errar?",
            "opcoes": [
              "Confiro a referência e as observações do novo pedido, porque a versão pode ser diferente",
              "Repito as cores de ontem, que eu lembro bem",
              "Pergunto ao colega do lado qual cor ele usaria",
              "Começo a pintar e confiro só quando terminar"
            ],
            "correta": 0,
            "feedbackCerto": "Certo. Cada pedido tem a sua referência, e a versão pode mudar.",
            "feedbackPorOpcao": [
              null,
              "A memória não vale mais que a referência do pedido.",
              "A fonte é o pedido e a referência, não a opinião de um colega.",
              "Achar o erro só no fim obriga a refazer o trabalho todo."
            ],
            "erroCriticoOpcoes": [
              1
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "leitura_pedido",
            "pergunta": "A caixa SUA MISSÃO diz Pintar 8 de 18 unidades. Logo abaixo aparece Já feitas nesta tarefa: 10. O que isso quer dizer?",
            "opcoes": [
              "Faltam 18 peças e 8 já foram feitas",
              "Você deve pintar 8 hoje e 18 amanhã",
              "Faltam 10 peças, que são as já feitas",
              "Faltam 8 unidades. A tarefa tem 18 e 10 já foram pintadas"
            ],
            "correta": 3,
            "feedbackCerto": "Certo. O primeiro número é o que falta. O segundo é o total da tarefa.",
            "feedbackPorOpcao": [
              "Está trocado. 8 é o que falta, não o que foi feito.",
              "A caixa mostra o que falta da tarefa. Ela não divide o trabalho por dias.",
              "As 10 já feitas não entram no que falta.",
              null
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "leitura_pedido",
            "pergunta": "Antes de abrir a tinta, o que você precisa confirmar na tarefa e no pedido?",
            "opcoes": [
              "Só a quantidade, porque as cores você já conhece do modelo",
              "Só a cor que aparece na foto da tela",
              "A versão da peça, a quantidade, o número de Cor de cada parte e as observações",
              "Só o título da tarefa, e o resto você vê no fim"
            ],
            "correta": 2,
            "feedbackCerto": "Isso mesmo. Versão, quantidade, número de Cor de cada parte e observações. Se algo faltar, consulte o responsável.",
            "feedbackErrado": "Não é só isso. Confirme a versão da peça, a quantidade, o número de Cor de cada parte e as observações do pedido."
          }
        ]
      },
      {
        "dia": 3,
        "titulo": "Preparação da superfície",
        "subtitulo": "Limpeza, defeitos e primer",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Tinta não conserta superfície ruim",
            "texto": "A tinta mostra o que está embaixo dela. Resto de resina, gordura dos dedos, pó de lixa, marcas de suporte e linhas de camada aparecem mais depois da pintura. Se você pinta por cima de sujeira ou defeito, fica mais difícil corrigir depois. Antes de tudo, olhe a peça em luz boa. Passe os dedos com cuidado para sentir áreas ásperas ou pegajosas."
          },
          {
            "tipo": "conteudo",
            "titulo": "Limpeza e defeitos",
            "texto": "A limpeza tira pó e gordura, conforme o procedimento da Valente. Procure marcas de suporte, rebarbas (sobras de material na borda), bolhas, superfície pegajosa e partes quebradas. Você pode tratar rebarbas pequenas se isso fizer parte do seu processo. Ao lixar, use EPI e trabalhe em lugar ventilado. O defeito vem da impressão ou da pós-impressão? Não esconda. Separe a peça e trate conforme o fluxo."
          },
          {
            "tipo": "conteudo",
            "titulo": "Primer: para que serve",
            "texto": "Primer é uma tinta de base. Ele ajuda a tinta seguinte a grudar e deixa a cor da peça igual por inteiro. Passe em camada fina, para não apagar os detalhes. A marca, o tipo e a hora de usar seguem o processo da Valente. Nem toda peça usa primer. Consulte o procedimento ou o responsável. Aplique em lugar ventilado, com EPI, longe das peças já prontas."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "preparacao_superficie",
            "cliente": "Colega: Essa peça está com uma marca de suporte bem visível no ombro. Passa uma camada grossa de primer que esconde. O prazo está apertado.",
            "opcoes": [
              {
                "label": "Concordo. A camada grossa cobre a marca e a gente ganha tempo",
                "correta": false,
                "erroCritico": true,
                "feedback": "Primer grosso apaga detalhe e não tira a marca. Esconder defeito é erro crítico."
              },
              {
                "label": "Antes de pintar, vou separar a peça e tratar a marca conforme o fluxo, ou consultar o responsável",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. Defeito de etapa anterior é separado e tratado, não escondido."
              },
              {
                "label": "Passo primer, pinto e vejo se o cliente reclama",
                "correta": false,
                "erroCritico": true,
                "feedback": "Passar adiante uma peça com defeito joga o problema para o cliente."
              },
              {
                "label": "Pinto direto com a tinta final, que é mais grossa",
                "correta": false,
                "erroCritico": false,
                "feedback": "Tinta grossa também não tira a marca e apaga ainda mais os detalhes."
              }
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "preparacao_superficie",
            "pergunta": "De modo geral, para que serve o primer?",
            "opcoes": [
              "Esconder defeitos da impressão",
              "Ficar no lugar da camada de cor final",
              "Dispensar a limpeza da peça",
              "Ajudar a tinta a grudar e deixar a base da peça com a cor igual"
            ],
            "correta": 3,
            "feedbackCerto": "Certo. Sempre em camada fina e seguindo o processo da Valente.",
            "feedbackPorOpcao": [
              "Primer não conserta defeito. E camada grossa apaga detalhe.",
              "Ele é base, não é a cor final.",
              "Sem limpeza, o primer gruda mal.",
              null
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "preparacao_superficie",
            "local": "Peça de treino na bancada",
            "instrucao": "Pegue uma peça de treino e olhe em luz boa. Procure sujeira, marcas de suporte, rebarbas e áreas pegajosas. Anote o que achou e o que faria. Não mexa em peças de pedidos reais."
          }
        ]
      },
      {
        "dia": 4,
        "titulo": "Cor e referência",
        "subtitulo": "Padrão, luz e peças iguais no lote",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Comparar sempre",
            "texto": "Compare a cor da peça com a referência e com o padrão do lote. A luz, a base e o número de camadas mudam o jeito como você vê a cor. Uma tinta pode parecer mais clara no pote e mais escura depois de seca. Compare sempre com a mesma luz. Se der, use luz neutra e boa. Deixe a referência ao lado."
          },
          {
            "tipo": "conteudo",
            "titulo": "Número de Cor, não gosto pessoal",
            "texto": "Quando o pedido diz qual é a cor, não troque por outra só porque fica bonita. Use o pote com o número de Cor indicado. Receitas, misturas e paletas oficiais seguem o procedimento da Valente. Precisa misturar ou ajustar uma cor? Consulte o responsável. Não crie receita própria."
          },
          {
            "tipo": "conteudo",
            "titulo": "Peças iguais no lote",
            "texto": "Duas miniaturas do mesmo lote com uniformes de tons diferentes parecem erro para o cliente. Isso vale mesmo que cada uma esteja bem pintada. Por isso, pinte a mesma cor em todas as peças de uma vez. Use o mesmo pote. Não dilua a tinta de um jeito em uma peça e de outro jeito em outra. Compare as peças lado a lado durante o trabalho."
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "fidelidade_cor",
            "pergunta": "O que pode fazer a mesma tinta parecer outra cor?",
            "itens": [
              "Luz diferente no lugar onde você compara",
              "Cor da base ou do primer que está por baixo",
              "Número de camadas aplicadas",
              "Nome do pincel usado",
              "Telas, que mudam o tom da cor"
            ],
            "corretos": [
              0,
              1,
              2,
              4
            ],
            "feedbackCerto": "Certo. Luz, base, camadas e telas mudam o jeito de ver a cor. O número do pote é a referência.",
            "feedbackErrado": "O nome do pincel não muda a cor. Luz, base, camadas e tela mudam."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "fidelidade_cor",
            "pergunta": "O lote tem 6 miniaturas. O pote da Cor indicada está no fim e você já pintou 4 peças. As 2 últimas parecem um pouco mais escuras. O que fazer?",
            "opcoes": [
              "Seguir assim, porque a diferença é pequena",
              "Comparar as 6 lado a lado, conferir se o pote e a diluição são os mesmos e consultar o responsável se a diferença continuar",
              "Clarear as 2 com outra tinta que parece combinar",
              "Repintar as 4 primeiras com o que sobrou do pote"
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Comparar o conjunto e procurar a causa mantém o padrão do lote.",
            "feedbackPorOpcao": [
              "Em lote, uma diferença pequena já parece erro para o cliente.",
              null,
              "Usar outra cor por conta própria quebra o padrão e a referência.",
              "Sem procurar a causa, você pode aumentar a diferença."
            ],
            "erroCriticoOpcoes": [
              2
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "fidelidade_cor",
            "local": "No computador ou no tablet Samsung, com o responsável",
            "instrucao": "Junto com o responsável, só olhando, veja na tarefa de pintura e na tela de Cores a imagem de referência e o número de Cor de cada parte de uma peça. Ache os potes e confira os números nas etiquetas. Veja se a cor da tela e a cor do pote são diferentes. É só consulta."
          }
        ]
      },
      {
        "dia": 5,
        "titulo": "Ordem de pintura",
        "subtitulo": "Base, sombras, luzes e detalhes",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Planejar a sequência",
            "texto": "Planejar a ordem evita refazer trabalho. Evita também a contaminação, que é a tinta ir para onde não deve. Olhe a peça e decida a sequência antes de começar. Se você pinta um detalhe delicado cedo demais, pode ter que refazer esse detalhe quando pintar as áreas vizinhas."
          },
          {
            "tipo": "conteudo",
            "titulo": "A ordem geral",
            "texto": "De modo geral, a ordem é esta. Primeiro a base, que são as cores principais das áreas grandes. Depois as sombras, que escurecem as partes fundas e dão profundidade. Depois as luzes, que clareiam as partes altas. Por último os detalhes, como olhos, distintivos e pequenos acessórios, e as aplicações, como decalques. A proteção final só entra se o processo da Valente pedir. Siga o procedimento da Valente."
          },
          {
            "tipo": "conteudo",
            "titulo": "Em lote e com cuidado",
            "texto": "Em lote, as peças precisam ficar iguais. Faça a mesma etapa em todas as peças antes de passar para a próxima etapa. Espere cada camada secar antes de pintar a área vizinha, para não manchar. A peça tem áreas que se tocam? Pense em qual cor vem primeiro, para ficar mais fácil acertar a borda."
          },
          {
            "tipo": "conteudo",
            "titulo": "Pintura em vários dias: Produção do dia",
            "texto": "Lote grande quase nunca termina em um dia. Em tarefa de pintura com mais de uma peça, você registra a pintura por dia. Toque em Concluir, ou no botão 📝 Produção do dia no tablet, ou em Registrar produção do turno no computador. Aparece Produção do dia. Ali você informa quantas peças pintou hoje, quantas estragaram e as anotações para amanhã. A tarefa fica pausada e volta no dia seguinte, somando as peças pintadas. Use as anotações para o próximo turno saber onde você parou, qual Cor usou e o que cuidar."
          },
          {
            "tipo": "ordenar",
            "competencia": "leitura_pedido",
            "instrucao": "Coloque em ordem as etapas de pintura de uma figura, da primeira para a última.",
            "itens": [
              "Base: cores principais nas áreas grandes",
              "Sombras nas partes fundas",
              "Luzes nas partes altas",
              "Detalhes: olhos, distintivos e pequenos itens"
            ],
            "feedbackCerto": "Isso mesmo: base, sombras, luzes e detalhes.",
            "feedbackErrado": "A ordem geral começa pela base e deixa os detalhes por último."
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "tecnica_pintura",
            "afirmacao": "Em um lote de 10 miniaturas, o melhor jeito de manter o padrão é terminar uma peça inteira antes de começar a outra.",
            "correta": false,
            "feedbackCerto": "Certo. Fazer a mesma etapa em todas as peças ajuda a deixar todas iguais.",
            "feedbackErrado": "É falso. Em lote, você faz a mesma etapa em todas as peças antes de seguir. Isso ajuda a manter o padrão."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "tecnica_pintura",
            "pergunta": "Hoje você pintou 5 peças boas de uma tarefa de 18. Uma peça caiu e estragou. Ao tocar em Concluir, o que você registra em Produção do dia?",
            "opcoes": [
              "18 pintadas, para a tarefa sair da fila",
              "5 pintadas, 1 estragada e uma anotação para amanhã dizendo onde você parou",
              "Só as 5 pintadas, sem falar da estragada, para não parecer erro",
              "Nada. O registro é feito só quando o lote inteiro acabar"
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Com os números reais e uma anotação clara, a tarefa continua amanhã sem confusão.",
            "feedbackPorOpcao": [
              "Marcar como feito o que não foi feito é erro crítico.",
              null,
              "Esconder a peça estragada deixa a contagem falsa. Registre também o que deu errado.",
              "A tarefa pausa a cada dia para somar o que foi pintado em cada turno."
            ],
            "erroCriticoOpcoes": [
              0,
              2
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "leitura_pedido",
            "pergunta": "Você vai planejar a pintura de uma peça de treino. Qual plano está certo?",
            "opcoes": [
              "Base nas áreas grandes, depois sombras e luzes, e detalhes delicados por último, esperando secar antes de pintar a área vizinha",
              "Olhos e distintivos primeiro, depois a base nas áreas grandes",
              "Base, depois os detalhes, e sombras e luzes no fim",
              "Tudo de uma vez, sem esperar secar, para ganhar tempo"
            ],
            "correta": 0,
            "feedbackCerto": "Isso mesmo. Base primeiro, sombras e luzes depois, detalhes por último. E cada camada seca antes de você pintar ao lado.",
            "feedbackErrado": "Não é essa a ordem. Primeiro a base nas áreas grandes, depois sombras e luzes, e os detalhes delicados por último. Espere secar antes de pintar a área vizinha, para não manchar."
          }
        ]
      },
      {
        "dia": 6,
        "titulo": "Técnicas básicas",
        "subtitulo": "Camadas finas, pincel seco e lavagem",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Camadas finas",
            "texto": "Para a tinta cobrir por igual, o melhor costuma ser passar várias camadas finas, e não uma camada grossa. Pouca tinta deixa a cobertura falhada. Camada grossa apaga detalhe. Tire o excesso de tinta do pincel no papel absorvente. Deixe secar entre uma camada e outra. Tinta muito grossa pode ser afinada, conforme o procedimento da Valente, para não deixar marcas de pincel."
          },
          {
            "tipo": "conteudo",
            "titulo": "Pincel seco e lavagem",
            "texto": "No pincel seco, você tira quase toda a tinta do pincel no papel e passa de leve nas partes em relevo. Assim as bordas ficam mais claras. Lavagem é uma tinta bem diluída, que escorre para as partes fundas e cria sombra. As duas técnicas dependem de controlar a quantidade de tinta. O resultado aparece aos poucos."
          },
          {
            "tipo": "conteudo",
            "titulo": "Pincel ou aerógrafo",
            "texto": "O pincel dá controle para os detalhes. O aerógrafo cobre áreas maiores por igual. Mas ele pede lugar ventilado, a máscara certa, limpeza e treino. Nem toda peça usa aerógrafo. As técnicas que a Valente usa de verdade são mostradas na prática com o supervisor. Treine em peça de treino antes de qualquer pedido real."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "tecnica_pintura",
            "pergunta": "A tinta do pote está grossa. A peça tem detalhes finos no rosto. O que fazer?",
            "opcoes": [
              "Passar uma camada grossa para terminar rápido",
              "Pôr água sem limite até a tinta ficar bem líquida",
              "Passar camadas finas, com pouca tinta no pincel, e deixar secar entre as camadas, seguindo o procedimento da Valente",
              "Passar a segunda camada com a primeira ainda úmida"
            ],
            "correta": 2,
            "feedbackCerto": "Certo. Camadas finas preservam o detalhe.",
            "feedbackPorOpcao": [
              "Camada grossa apaga detalhe e escorre.",
              "Tinta líquida demais cobre mal e escorre. Siga o procedimento.",
              null,
              "Tinta úmida sobre tinta úmida mancha e arrasta a camada de baixo."
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "tecnica_pintura",
            "afirmacao": "O pincel seco serve para destacar as partes em relevo, com pouca tinta no pincel.",
            "correta": true,
            "feedbackCerto": "Certo. Pouca tinta e mão leve destacam as bordas.",
            "feedbackErrado": "É verdadeiro. O pincel seco usa pouca tinta e destaca o relevo."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "tecnica_pintura",
            "local": "Bancada de treino com supervisor",
            "instrucao": "Com o supervisor, em uma peça de treino, passe duas camadas finas e faça um pincel seco. Espere o supervisor validar antes de pintar qualquer pedido real. Depois confirme que fez."
          }
        ]
      },
      {
        "dia": 7,
        "titulo": "Detalhes e aplicações",
        "subtitulo": "Olhos, distintivos, decalques e DTF",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Detalhes pedem referência",
            "texto": "Olhos, distintivos, decalques, DTF e pequenos detalhes pedem alinhamento, referência e ordem. Nem todo produto usa todas essas técnicas. Veja na tarefa quais valem. Um distintivo bonito, mas de outra versão, é erro. Antes de aplicar, confira na referência se o detalhe é o certo e em que posição ele fica."
          },
          {
            "tipo": "conteudo",
            "titulo": "Decalque em passos",
            "texto": "Decalque é uma película com desenho que você passa para a peça. Em geral, os passos são estes. Recorte perto do desenho. Molhe o suficiente. Deslize para a posição. Ajuste com pincel macio. Tire o excesso de água com cuidado. Deixe secar. A superfície deve estar lisa e limpa. Um decalque certo, mas aplicado torto, continua sendo defeito. Por isso, teste a posição antes de fixar."
          },
          {
            "tipo": "conteudo",
            "titulo": "DTF e olhos",
            "texto": "DTF é um desenho impresso que também é passado para a peça. Ele tem procedimento próprio, definido pela Valente. Siga o treinamento ou consulte o responsável. Olhos pedem mão firme, um ponto bem pequeno de tinta e os dois lados iguais. Faça os olhos por último, depois das áreas vizinhas. Compare os dois olhos antes de a tinta secar."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "inspecao_liberacao",
            "cliente": "Colega: Terminei o decalque do distintivo, mas ficou um pouco torto e já secou. Vamos deixar assim. Ninguém vai notar.",
            "opcoes": [
              {
                "label": "Sim, já secou, vamos seguir",
                "correta": false,
                "erroCritico": true,
                "feedback": "Torto continua sendo defeito. Esconder falha é erro crítico."
              },
              {
                "label": "Comparo com a referência, vejo que tipo de defeito é e consulto o responsável sobre como corrigir",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. Comparar, entender o defeito e consultar é o caminho."
              },
              {
                "label": "Raspo o decalque com lixa forte",
                "correta": false,
                "erroCritico": false,
                "feedback": "Lixar forte pode estragar a pintura e a peça."
              },
              {
                "label": "Cubro com tinta por cima e aplico outro",
                "correta": false,
                "erroCritico": true,
                "feedback": "Camadas passadas sem método juntam mais problema e não acertam a posição."
              }
            ]
          },
          {
            "tipo": "ordenar",
            "competencia": "tecnica_pintura",
            "instrucao": "Coloque em ordem os passos para aplicar um decalque.",
            "itens": [
              "Conferir na referência qual é o decalque e a posição",
              "Recortar o decalque perto do desenho",
              "Molhar o suficiente e deslizar para a posição",
              "Ajustar com pincel macio e tirar o excesso de água",
              "Deixar secar sem mexer"
            ],
            "feedbackCerto": "Isso mesmo.",
            "feedbackErrado": "Veja de novo: confira, recorte, molhe e deslize, ajuste e deixe secar."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "inspecao_liberacao",
            "local": "Peça de treino ou referência da tarefa",
            "instrucao": "Em uma peça de treino, teste a posição de um decalque ou detalhe, sem fixar. Confira na referência se é o detalhe certo e a posição certa. Se a peça for de pedido real, só olhe. Confirme que fez."
          }
        ]
      },
      {
        "dia": 8,
        "titulo": "Erros e correções",
        "subtitulo": "Reconhecer, classificar e agir",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Erros comuns",
            "texto": "Os erros mais comuns são estes. Excesso de tinta, que forma grumos (bolinhas de tinta). Mancha. Escorrimento, quando a tinta desce e forma gota. Cobertura ruim, quando a cor de baixo aparece. Diferença de tom entre as peças. Falha de detalhe, como olho borrado. Quem reconhece o erro cedo corrige mais fácil."
          },
          {
            "tipo": "conteudo",
            "titulo": "Corrigir com método",
            "texto": "Tentar esconder uma mancha com mais tinta pode apagar a textura e aumentar o problema. A tinta ainda está úmida? Tire com cuidado, com pincel ou cotonete. A tinta secou? Espere, lixe de leve se o procedimento permitir e repinte em camada fina. Não vá juntando camadas sem método."
          },
          {
            "tipo": "conteudo",
            "titulo": "Classifique antes de agir",
            "texto": "Classificar é decidir que tipo de caso é. Pergunte: posso corrigir com um procedimento que eu conheço? Preciso consultar? Ou a peça precisa voltar para uma etapa anterior, como a pós-impressão? Defeito de impressão não se resolve com tinta. Na dúvida, consulte o responsável e registre o que aconteceu."
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "tecnica_pintura",
            "pergunta": "Em quais situações você deve consultar o responsável ou devolver a peça para outra etapa?",
            "itens": [
              "Defeito de impressão visível, que a tinta não resolve",
              "Mancha pequena em tinta úmida, que você sabe tirar",
              "Diferença de tom entre peças do lote, sem causa clara",
              "Cor errada aplicada e dúvida sobre como tirar",
              "Escorrimento que você já corrige com o método ensinado"
            ],
            "corretos": [
              0,
              2,
              3
            ],
            "feedbackCerto": "Certo. Quando você não conhece o procedimento ou o defeito vem de etapa anterior, consulte ou devolva.",
            "feedbackErrado": "Mancha úmida e escorrimento com método ensinado você mesmo corrige. Os outros casos pedem consulta ou devolução."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "inspecao_liberacao",
            "pergunta": "Uma peça seca com um escorrimento no braço. Qual é o caminho certo?",
            "opcoes": [
              "Passar mais tinta por cima para nivelar",
              "Deixar assim e colocar a peça junto das aprovadas",
              "Lixar forte até tirar toda a tinta do braço",
              "Esperar secar, tratar o ponto com o método ensinado e repintar em camada fina, ou consultar se não souber"
            ],
            "correta": 3,
            "feedbackCerto": "Certo. Corrigir com método preserva a textura.",
            "feedbackPorOpcao": [
              "Mais tinta aumenta o problema.",
              "Passar adiante uma peça com defeito é erro crítico.",
              "Lixar forte pode apagar detalhe e estragar a peça.",
              null
            ],
            "erroCriticoOpcoes": [
              1
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "inspecao_liberacao",
            "pergunta": "Uma peça secou com uma mancha. Você não conhece o jeito certo de corrigir. O que fazer?",
            "opcoes": [
              "Passar várias camadas de tinta por cima até a mancha sumir",
              "Consultar o responsável e registrar o que aconteceu, sem juntar camadas por cima",
              "Colocar a peça junto das aprovadas, porque a mancha é pequena",
              "Corrigir do seu jeito e não contar para ninguém"
            ],
            "correta": 1,
            "feedbackCerto": "Isso mesmo. Sem procedimento conhecido, o caso é de consulta. Juntar camadas sem método aumenta o problema.",
            "feedbackErrado": "Não é esse o caminho. Quando você não conhece o procedimento, consulte o responsável e registre o que aconteceu. Não junte camadas de tinta sem método."
          }
        ]
      },
      {
        "dia": 9,
        "titulo": "Inspeção e liberação",
        "subtitulo": "Conferir o conjunto antes de liberar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Terminar não é liberar",
            "texto": "Terminar de pintar não quer dizer liberar. Compare a peça com a referência, o pedido e o padrão. Confira a quantidade e o acabamento. Olhe a peça de todos os lados, em luz boa, de perto e na distância normal. Confira bordas, olhos, decalques, cobertura e marcas de dedo."
          },
          {
            "tipo": "conteudo",
            "titulo": "O conjunto importa",
            "texto": "Em lote, uma peça pode estar ótima e mesmo assim ficar diferente das outras. Coloque todas lado a lado e compare os tons e os detalhes. Confira a quantidade com a tarefa. Uma peça ficou diferente? Separe para correção. Não deixe passar."
          },
          {
            "tipo": "conteudo",
            "titulo": "Separar e registrar",
            "texto": "Use um checklist visual. Deixe as peças aprovadas separadas das que precisam de correção, em lugares bem claros. A passagem para a próxima coluna do Kanban, Preparar p/ envio, segue o procedimento da Valente. Se um padrão visual precisa de validação, quem valida é o responsável. Na dúvida, consulte."
          },
          {
            "tipo": "conteudo",
            "titulo": "Fechar a pintura",
            "texto": "Quando todas as peças da tarefa estão pintadas, abre a janela Fechar a pintura. Ela pergunta quantas peças ficaram prontas no total e quantas voltam para a fase anterior, com o motivo. Marque como prontas só as que passaram na inspeção do conjunto. Peça com defeito de impressão, ou que você não consegue corrigir, volta para a fase anterior. Escreva o motivo de forma clara. Registrar certo mantém verdadeira a contagem de produção do pedido."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "inspecao_liberacao",
            "cliente": "Líder: Seu lote de 8 está pronto? O cliente espera hoje.",
            "opcoes": [
              {
                "label": "Está pronto. Pelo que vi da última, todas ficaram boas",
                "correta": false,
                "erroCritico": true,
                "feedback": "Olhar só a última peça deixa o conjunto sem conferir."
              },
              {
                "label": "Ainda estou comparando as 8 lado a lado com a referência e a tarefa. Uma ficou diferente e eu separei para correção",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. Compare o conjunto e separe a peça diferente."
              },
              {
                "label": "Posso liberar as 8 e corrigir depois, se reclamarem",
                "correta": false,
                "erroCritico": true,
                "feedback": "Liberar peça com defeito é erro crítico."
              },
              {
                "label": "Conto só a quantidade. Se der 8, está liberado",
                "correta": false,
                "erroCritico": false,
                "feedback": "A quantidade é só um item do checklist."
              }
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "inspecao_liberacao",
            "afirmacao": "Se uma peça do lote está bem pintada quando vista sozinha, ela pode ser liberada mesmo que esteja diferente das outras.",
            "correta": false,
            "feedbackCerto": "Certo. O cliente olha o conjunto.",
            "feedbackErrado": "É falso. Em lote, uma peça diferente das outras parece erro, mesmo bem pintada."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "inspecao_liberacao",
            "pergunta": "Você pintou as 10 peças da tarefa. Na inspeção do conjunto, 9 passaram e 1 tem defeito de impressão no rosto. Na janela Fechar a pintura, o que você registra?",
            "opcoes": [
              "10 prontas, e corrigir depois se o cliente reclamar",
              "9 prontas, sem falar da outra, para não atrasar o pedido",
              "9 prontas e 1 voltando para a fase anterior, com o motivo escrito",
              "Nenhuma pronta até o cliente avaliar o lote"
            ],
            "correta": 2,
            "feedbackCerto": "Certo. Prontas são só as aprovadas. A peça com defeito volta, com o motivo.",
            "feedbackPorOpcao": [
              "Liberar peça com defeito é erro crítico.",
              "Esconder a peça deixa a contagem falsa, e o pedido segue errado.",
              null,
              "O cliente não avalia antes. A inspeção é sua, e a janela pede o total de peças prontas."
            ],
            "erroCriticoOpcoes": [
              0,
              1
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "inspecao_liberacao",
            "local": "Bancada de inspeção",
            "instrucao": "Com peças de treino, faça uma inspeção com o checklist visual: referência, quantidade, acabamento e conjunto. Separe as aprovadas das que precisam de correção. Confirme que fez."
          }
        ]
      },
      {
        "dia": 10,
        "titulo": "Missão Pintura",
        "subtitulo": "Do pedido à liberação",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O caminho da pintura",
            "texto": "Você recebe uma peça de treino, a referência e uma tarefa simulada. O caminho é este. Ler a SUA MISSÃO e a referência. Conferir a Cor, de 01 a 33, pelo pote. Preparar a superfície. Planejar a ordem: base, sombras, luzes e detalhes. Usar as técnicas básicas. Fazer detalhes e decalques. Corrigir com método. Inspecionar o conjunto. No sistema, registrar a Produção do dia e Fechar a pintura."
          },
          {
            "tipo": "conteudo",
            "titulo": "Como será a avaliação",
            "texto": "A avaliação olha a preparação, se a peça ficou igual à referência, a organização, a correção de erros e a conferência final. Só o supervisor pode validar as práticas que dependem de padrão visual ou técnico. Este treinamento não altera dados reais do sistema."
          },
          {
            "tipo": "checklist",
            "titulo": "Checklist da missão",
            "itens": [
              "Tarefa e referência lidas",
              "Número de Cor conferido no pote",
              "Superfície inspecionada",
              "Sequência de pintura planejada",
              "Camadas finas aplicadas",
              "Detalhes conferidos",
              "Inspeção final do conjunto",
              "Produção do dia e Fechar a pintura entendidos (sem alterar dados reais)"
            ]
          },
          {
            "tipo": "cenario",
            "competencia": "inspecao_liberacao",
            "titulo": "Lote de 4 soldados",
            "noInicial": "a",
            "nos": {
              "a": {
                "cliente": "Tarefa simulada: pintar 4 soldados, com o uniforme igual ao da referência. Você abre a tarefa e a referência. A referência mostra um verde. Na prateleira há três potes de verde. O que você faz primeiro?",
                "opcoes": [
                  {
                    "label": "Confiro o número de Cor da referência e uso o pote com o mesmo número na etiqueta",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. O número do pote é a referência que vale.",
                    "proximo": "b"
                  },
                  {
                    "label": "Uso o verde que parece mais próximo na tela",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "A tela muda o tom da cor. Usar cor parecida quebra o padrão.",
                    "proximo": "b"
                  },
                  {
                    "label": "Misturo dois verdes até ficar parecido",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Misturar sem receita oficial é improviso.",
                    "proximo": "b"
                  },
                  {
                    "label": "Começo a pintar e confiro depois",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Conferir depois pode obrigar você a refazer tudo.",
                    "proximo": "b"
                  }
                ]
              },
              "b": {
                "cliente": "Você inspeciona as peças antes de pintar. Um soldado tem uma marca de suporte e a superfície pegajosa. O que você faz?",
                "opcoes": [
                  {
                    "label": "Passo primer grosso para esconder",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Esconder defeito é erro crítico.",
                    "proximo": "c"
                  },
                  {
                    "label": "Separo essa peça, trato conforme o fluxo ou consulto o responsável, e sigo com as outras",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Defeito de etapa anterior é separado e tratado.",
                    "proximo": "c"
                  },
                  {
                    "label": "Pinto assim mesmo, a tinta resolve",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Tinta não conserta superfície ruim.",
                    "proximo": "c"
                  },
                  {
                    "label": "Jogo a peça fora sem avisar ninguém",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Toda decisão sobre a peça deve ser avisada e seguir o fluxo.",
                    "proximo": "c"
                  }
                ]
              },
              "c": {
                "cliente": "Você pintou os 4 soldados. Um deles tem um escorrimento seco no braço e o tom parece mais escuro. Como liberar?",
                "opcoes": [
                  {
                    "label": "Libero os 4, o erro é pequeno",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Liberar peça com defeito é erro crítico."
                  },
                  {
                    "label": "Passo mais tinta por cima do escorrimento",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Camadas passadas sem método aumentam o problema."
                  },
                  {
                    "label": "Comparo os 4 lado a lado com a referência e a tarefa, separo o que está diferente, corrijo com método ou consulto, e libero só os aprovados",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Conjunto, método e separação."
                  },
                  {
                    "label": "Refaço as 4 peças do zero sem avisar",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Refazer tudo sem consultar desperdiça trabalho."
                  }
                ]
              }
            }
          },
          {
            "tipo": "missao",
            "competencia": "inspecao_liberacao",
            "titulo": "Missão Pintura",
            "objetivo": "Fazer o caminho completo da pintura em uma peça de treino e decidir se ela está pronta para seguir.",
            "contexto": "Você recebeu uma peça de treino, uma imagem de referência e uma tarefa simulada de 1 unidade, com 3 cores e um detalhe. Não altere nenhum dado real.",
            "tarefas": [
              "Ler a SUA MISSÃO, a tarefa e a referência e anotar a versão, a quantidade (total e quanto falta) e os números de Cor",
              "Explicar como você registraria a Produção do dia e o Fechar a pintura se a tarefa tivesse 8 unidades feitas em dois dias (só explicar, sem registrar)",
              "Achar os potes pelos números das etiquetas",
              "Inspecionar e preparar a superfície",
              "Planejar e anotar a sequência: base, sombras, luzes e detalhes",
              "Fazer a pintura autorizada em camadas finas, com o supervisor",
              "Inspecionar a peça e decidir: liberar, corrigir ou devolver"
            ],
            "criterioConclusao": "O supervisor valida a prática: preparação, peça igual à referência, organização, correção de erros e conferência final."
          }
        ]
      }
    ],
    "rotulosCompetencia": {
      "preparacao_estacao": "Estação de pintura",
      "leitura_pedido": "Leitura do pedido",
      "preparacao_superficie": "Preparação da superfície",
      "fidelidade_cor": "Fidelidade à cor",
      "tecnica_pintura": "Técnicas de pintura",
      "inspecao_liberacao": "Inspeção e liberação"
    }
  },
  "expedicao": {
    "id": "expedicao",
    "nome": "Preparação, Embalagem e Expedição",
    "descricao": "Aprenda a conferir, embalar, identificar e despachar pedidos com segurança, registrando o envio no Valente OS.",
    "icone": "📦",
    "versao": 3,
    "cargosPermitidos": null,
    "competencias": [
      "Conferência do pedido",
      "Conferência final",
      "Embalagem e proteção",
      "Identificação do pacote",
      "Dados de envio",
      "Despacho e Kanban"
    ],
    "criteriosConclusao": "Conferir pedido fictício, integridade, identificação, embalagem e dados de envio; identificar peça colecionável rotulada incorretamente; simular registro sem despacho real. Requer conferência do responsável.",
    "dias": [
      {
        "dia": 1,
        "titulo": "Minha estação de expedição",
        "subtitulo": "Conheça o lugar e a última conferência",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Expedição é a última barreira",
            "texto": "Expedição não é só colocar a peça em uma caixa. É a última conferência dentro da empresa antes de o produto ir para o cliente. Antes de você vieram a modelagem, a impressão, a pós-impressão e a pintura. Todo esse trabalho só vale se a peça certa chegar inteira e bem protegida. Se um erro passar por você, quem vai descobrir é o cliente."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que existe na sua estação",
            "texto": "Na sua estação você encontra cinco coisas. Materiais de embalagem: caixas, proteção interna e fita. Etiquetas e identificação. O Valente OS no tablet, onde você consulta o pedido e a tarefa de Expedição. Ferramentas simples, como tesoura ou estilete. Tome cuidado ao cortar. E a área de conferência: uma bancada limpa e arrumada, onde você compara o que recebeu com o que o pedido diz. A Valente define quais materiais e padrões são aprovados."
          },
          {
            "tipo": "conteudo",
            "titulo": "Um exemplo para guardar",
            "texto": "Caixa bonita com produto errado é falha grave. O cliente não liga para a caixa se abrir e achar a miniatura trocada, quebrada ou sem um acessório. Por isso, a primeira pergunta nunca é como embalar. A primeira pergunta é: o que eu estou recebendo e está tudo certo? Deixe a bancada arrumada e trabalhe um pedido de cada vez. Isso ajuda a não misturar pedidos."
          },
          {
            "tipo": "conteudo",
            "titulo": "Sua missão na tela da tarefa",
            "texto": "Quando você abre uma tarefa, a caixa SUA MISSÃO aparece no topo. Ela mostra o que você deve fazer e quanto falta. O seu PIN mostra que você é o responsável pelas tarefas que inicia e conclui. No tablet, Minhas funções abre uma fila única. O botão Próxima da fila leva à tarefa seguinte. O Kanban atualiza sozinho a cada 60 segundos. Mas é a tarefa que diz o que você deve fazer."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "conferencia_final",
            "pergunta": "Um pedido chega à expedição já dentro da caixa de transporte. A miniatura que está na caixa é de outra versão, diferente da que está no pedido. Como tratar isso?",
            "opcoes": [
              "É falha leve. A caixa está bonita e bem fechada, e o cliente pode trocar depois.",
              "É falha de quem embalou. Basta refazer a caixa com a mesma peça.",
              "É falha grave, mesmo com a embalagem perfeita. Você para e leva ao responsável.",
              "Depende do cliente. Se ele não perceber, o envio segue normal."
            ],
            "correta": 2,
            "feedbackCerto": "Isso mesmo. Caixa bonita com produto errado é falha grave. Você é a última barreira da empresa.",
            "feedbackPorOpcao": [
              "Caixa bonita não conserta produto errado. O erro chegaria ao cliente.",
              "Refazer a caixa não resolve. O problema é a peça, não a embalagem.",
              null,
              "Torcer para o cliente não perceber é esconder o defeito. Isso não é aceito."
            ],
            "erroCriticoOpcoes": [
              0,
              3
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "conferencia_pedido",
            "local": "No computador ou no tablet Samsung, com o responsável",
            "instrucao": "Peça ao responsável para abrir a aba Pedidos e mostrar a coluna Preparar p/ envio. Só olhe um pedido, sem mudar nada. Depois, vá até a estação de expedição e veja onde ficam os materiais de embalagem, as etiquetas e a área de conferência. Marque como feito quando souber onde está cada um."
          }
        ]
      },
      {
        "dia": 2,
        "titulo": "O que estou recebendo",
        "subtitulo": "Antes de embalar, consulte e compare",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Consulte antes de abrir",
            "texto": "Antes de embalar, consulte o pedido no Valente OS e na tarefa de Expedição. Veja o cliente, a quantidade de peças, os componentes ou acessórios, o acabamento pedido e as observações. Leia as observações com atenção. Elas costumam trazer detalhes importantes, como um cuidado especial com a peça. Alguma informação não está clara? Não adivinhe. Consulte a ficha ou o responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "Compare o físico com o registro",
            "texto": "Depois de ler o pedido, olhe o que chegou na bancada. Compare item por item. O que está no sistema e o que está na bancada precisam ser iguais. Exemplo: o pedido tem duas peças com acessórios. Não basta contar duas caixas. As caixas podem estar certas e um acessório estar faltando. Conte o que há dentro, não o número de caixas."
          },
          {
            "tipo": "conteudo",
            "titulo": "Checklist por conteúdo",
            "texto": "O jeito mais seguro é fazer uma lista do que o pedido deve ter. Exemplo: peça A, peça B, acessório da peça A, base, observação especial. Marque cada item só quando você vir o item com seus olhos. Item que você acha que está lá, mas não viu, não conta como conferido. Algum item não apareceu? Pare e consulte o responsável. Não siga esperando que ele apareça depois."
          },
          {
            "tipo": "conteudo",
            "titulo": "Retirar do estoque",
            "texto": "As peças prontas ficam guardadas em endereços, como G1-E01-P02. Na tarefa de separação, conferência, embalagem ou expedição, toque em Retirar do estoque. Ele mostra só o componente da tarefa. Se a tarefa é da peça inteira, mostra todos os componentes. Depois pede Quantas peças. Na aba Estoque, a Retirada guiada diz em qual endereço pegar cada item. Quando você confirma Retirar, os itens vão para a Mesa de separação. A baixa no estoque só acontece quando se marca Enviado na mesa."
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "conferencia_pedido",
            "afirmacao": "Quando você confirma Retirar na Retirada guiada, o estoque já é baixado de vez, antes de qualquer outra ação.",
            "correta": false,
            "feedbackCerto": "Certo. Os itens vão para a Mesa de separação. A baixa só acontece quando se marca Enviado na mesa.",
            "feedbackErrado": "Falso. Retirar leva os itens para a Mesa de separação. A baixa só acontece quando se marca Enviado na mesa."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "conferencia_pedido",
            "pergunta": "O pedido tem duas miniaturas e um acessório para cada uma. Na bancada há duas caixas. Qual é a conferência certa?",
            "opcoes": [
              "Abrir e ver peça por peça e acessório por acessório, comparando com o pedido.",
              "Contar as caixas. Se são duas, o pedido está completo.",
              "Confiar na etiqueta das caixas, porque quem fechou já conferiu.",
              "Embalar agora e conferir depois, quando o rastreio for gerado."
            ],
            "correta": 0,
            "feedbackCerto": "Certo. Conferir o conteúdo evita que uma falta passe sem ninguém ver.",
            "feedbackPorOpcao": [
              null,
              "Contar caixas não mostra o que há dentro. Um acessório pode estar faltando.",
              "A conferência de outra pessoa não vale no lugar da sua. A expedição é a última barreira.",
              "Depois que o pacote sai, a falta já chegou ao cliente."
            ],
            "erroCriticoOpcoes": [
              2,
              3
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "conferencia_pedido",
            "local": "No computador ou no tablet Samsung, com o responsável",
            "instrucao": "Peça ao responsável para abrir um pedido da coluna Preparar p/ envio. Só olhe, sem mudar nada. Veja cliente, quantidade, componentes, acabamento e observações. Depois faça, no papel ou de cabeça, uma lista do conteúdo esperado. Marque como feito quando conseguir listar todos os itens, sem contar só as caixas."
          }
        ]
      },
      {
        "dia": 3,
        "titulo": "Conferência final",
        "subtitulo": "Aprovar para embalagem é uma decisão de qualidade",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que você verifica",
            "texto": "Na conferência final, você olha seis pontos. O produto é o certo? A quantidade está certa? A versão é a certa? O acabamento está como no pedido? A peça está inteira? Todos os componentes estão ali? Segure a peça e olhe com boa luz. Procure rachaduras, partes soltas, detalhes finos quebrados, marcas de manuseio, tinta descascada e sujeira. Se precisar, compare com a descrição do pedido."
          },
          {
            "tipo": "conteudo",
            "titulo": "Detectar antes de fechar",
            "texto": "Esta etapa serve para achar troca, falta ou dano antes de fechar a embalagem. Depois de fechada, a caixa esconde o problema. Quem vai achar é o cliente. A peça está quebrada? Não embale esperando que o cliente aceite. Separe a peça e não envie. Registre Encontrei problema na tarefa e avise o responsável. Ele aciona a correção definida pela Valente."
          },
          {
            "tipo": "conteudo",
            "titulo": "Cuidado ao identificar a peça",
            "texto": "Na conferência final, veja se a miniatura de resina está inteira e se tem partes pequenas ou frágeis. Confira se o pedido e a identificação tratam a peça como colecionável, e não como brinquedo. Achou alguma diferença? Pare e avise o responsável antes de embalar."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "seguranca_produto",
            "pergunta": "A identificação de uma miniatura de resina diz \"brinquedo infantil\". O que você faz?",
            "opcoes": [
              "Envio, porque a etiqueta já está pronta.",
              "Apago a informação sem avisar ninguém.",
              "Paro a expedição e aviso o responsável para corrigir a informação."
            ],
            "correta": 2,
            "feedbackCerto": "Certo. Não envie uma peça com identificação errada.",
            "feedbackErrado": "Releia a orientação sobre o uso da peça. Antes de vender, confirme para que a peça serve. As miniaturas de resina da linha atual não são brinquedos."
          },
          {
            "tipo": "conteudo",
            "titulo": "Uma decisão de qualidade",
            "texto": "Aprovar para embalagem é uma decisão de qualidade. Não é só mais um passo. Quando você aprova, está dizendo que aquele produto pode chegar ao cliente. Está em dúvida? A dúvida é sinal para parar e consultar, não para seguir. Parar e avisar não é erro. Esconder ou ignorar um defeito é erro."
          },
          {
            "tipo": "conteudo",
            "titulo": "Tudo certo ou Encontrei problema",
            "texto": "Quando você conclui a tarefa de Conferência, o tablet abre uma janela com duas respostas. Tudo certo libera o pedido para a Embalagem. Encontrei problema pede o motivo e quantas peças têm o problema. O pedido não segue enquanto o problema não for resolvido. Só responda Tudo certo depois de passar pelos seis pontos com a peça na mão."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "conferencia_final",
            "cliente": "Colega: A miniatura tem uma rachadura pequena na base. O prazo está apertado. Vamos embalar logo, o cliente nem vai notar.",
            "opcoes": [
              {
                "label": "Concordo. É pequena e o prazo pesa mais. Embalo e sigo.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Embalar um defeito que você já viu é esconder o problema. O cliente vai notar."
              },
              {
                "label": "Separo a peça, não embalo, registro Encontrei problema na tarefa e aviso o responsável.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. Peça quebrada ou rachada não segue. Você registra Encontrei problema, o pedido para e o responsável aciona a correção."
              },
              {
                "label": "Embalo, mas coloco um bilhete avisando o cliente da rachadura.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Passar o defeito para o cliente não corrige a falha. Essa decisão não é sua, e não é o cliente quem deve resolver."
              },
              {
                "label": "Marco a tarefa como concluída e deixo o próximo turno decidir.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Marcar como feito sem resolver passa o defeito adiante e deixa o registro falso."
              }
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "conferencia_final",
            "pergunta": "O pedido tem três peças. No fim da conferência, você achou uma peça com tinta descascada. O que responder na janela da tarefa?",
            "opcoes": [
              "Tudo certo, porque duas das três peças estão boas.",
              "Tudo certo, e aviso o cliente com um bilhete dentro da caixa.",
              "Concluo a tarefa sem responder e deixo a Embalagem decidir.",
              "Encontrei problema, com o motivo e quantas peças têm o problema."
            ],
            "correta": 3,
            "feedbackCerto": "Certo. Com o problema registrado, o pedido não segue sem solução.",
            "feedbackPorOpcao": [
              "Aprovar com defeito que você já viu é esconder o problema.",
              "Passar o defeito para o cliente não resolve a falha.",
              "Deixar para outra etapa é passar o defeito adiante.",
              null
            ],
            "erroCriticoOpcoes": [
              0,
              2
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "conferencia_final",
            "afirmacao": "Se você tem dúvida se a pintura de uma peça está como no pedido, o certo é aprovar e deixar o cliente reclamar se houver problema.",
            "correta": false,
            "feedbackCerto": "Certo. Dúvida é motivo para parar e consultar a ficha ou o responsável.",
            "feedbackErrado": "Falso. Dúvida não deixa você aprovar. Consulte a ficha e o responsável antes de liberar."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "conferencia_final",
            "local": "Área de conferência da expedição",
            "instrucao": "Pegue uma peça de treino. Ou, com permissão do responsável, olhe uma peça de um pedido, sem mudar nada no sistema. Passe pelos seis pontos: produto, quantidade, versão, acabamento, peça inteira e componentes. Marque como feito quando tiver olhado a peça toda com boa luz."
          }
        ]
      },
      {
        "dia": 4,
        "titulo": "Montagem final",
        "subtitulo": "Ordem, encaixe e acessórios antes de fechar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Quando há montagem",
            "texto": "Alguns produtos saem da pintura em partes separadas. Eles precisam ser montados antes do envio. Exemplo: uma figura com base, braço ou acessório de encaixar. A Valente define quais produtos são montados na expedição e como montar. Siga o procedimento definido pela Valente ou consulte o responsável. Não monte por conta própria o que a ficha não pede."
          },
          {
            "tipo": "conteudo",
            "titulo": "Sequência e teste de encaixe",
            "texto": "Quando houver montagem, siga a ordem e o padrão definidos. Antes de fixar, teste o encaixe sem força. As partes devem entrar fácil. Está apertado demais? Não force. Os detalhes finos da miniatura quebram fácil. Pare e consulte o responsável. Veja também se cada acessório está no lugar certo, conforme a ficha ou a foto de referência."
          },
          {
            "tipo": "conteudo",
            "titulo": "O risco da pressa",
            "texto": "Montar com pressa pode inverter um componente. Também pode causar um dano que a peça não tinha quando saiu da pintura. Se a peça passou na conferência e quebrou na montagem, o problema passa a ser seu. Trabalhe com calma, com a bancada limpa e as peças à vista. Algo soltou ou quebrou? Pare, não esconda e avise o responsável."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "conferencia_final",
            "pergunta": "Você testa o encaixe de um braço em uma miniatura. A peça entra apertada e você sente que ela resiste. O que fazer?",
            "opcoes": [
              "Forçar até entrar, porque peça bem apertada fica firme.",
              "Lixar a ponta do encaixe por conta própria para dar folga.",
              "Deixar o braço solto dentro da caixa e avisar o cliente por mensagem.",
              "Parar, não forçar e consultar a ficha e o responsável."
            ],
            "correta": 3,
            "feedbackCerto": "Certo. Se a peça resiste, você para e consulta. Nunca força.",
            "feedbackPorOpcao": [
              "Forçar pode quebrar um detalhe fino ou estragar a pintura.",
              "Mexer na peça sem procedimento aprovado pode estragar a peça.",
              "Mudar o produto final sem autorização é tomar uma decisão que não é sua.",
              null
            ],
            "erroCriticoOpcoes": [
              1,
              2
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "conferencia_final",
            "local": "Valente OS (tablet) > tarefa de Expedição do pedido, instruções e checklist",
            "instrucao": "Sem mudar nada, abra a tarefa de Expedição de um pedido. Leia o título, as instruções e o checklist. Procure se fala em montagem final. Se não falar, lembre que você consultaria o responsável. Marque como feito quando souber onde olhar para saber se um produto precisa ser montado."
          }
        ]
      },
      {
        "dia": 5,
        "titulo": "Escolha e preparação da embalagem",
        "subtitulo": "Proteção certa para o transporte",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que a embalagem faz",
            "texto": "A embalagem protege a peça dos movimentos e das batidas do transporte. No caminho, a caixa é empilhada, virada, balançada e pode cair. Quanto mais frágil a peça, mais cuidado. O tamanho, a fragilidade e os componentes pesam na escolha da embalagem. Miniaturas têm detalhes finos, como dedos, armas e enfeites. Eles quebram com uma batida leve."
          },
          {
            "tipo": "conteudo",
            "titulo": "Folga demais, aperto demais",
            "texto": "Em caixa grande demais, com a peça solta, a peça bate por dentro. A batida na parede da caixa quebra os detalhes. Caixa apertada demais aperta as partes frágeis e pode estragar só de encostar. O certo é a peça firme, sem espaço para balançar e sem aperto nos detalhes. Se houver mais de uma peça, proteja cada uma separada, para uma não encostar na outra."
          },
          {
            "tipo": "conteudo",
            "titulo": "Padrões aprovados",
            "texto": "Use os materiais e os padrões aprovados para cada categoria, quando houver. Não improvise embalagem se já existe um padrão definido. Não existe padrão para aquele caso? Consulte o responsável. Não decida sozinho. Depois de embalar, balance de leve a caixa fechada. Se você ouvir ou sentir a peça se mexer, ela não está bem presa."
          },
          {
            "tipo": "conteudo",
            "titulo": "Janela de Embalagem",
            "texto": "Quando você conclui a tarefa de Embalagem, o tablet abre uma janela com duas respostas: Tudo certo ou Encontrei problema. Algo está errado, como peça trincada, pouca proteção ou item faltando? Toque em Encontrei problema e diga o motivo e quantas peças. O pedido não segue enquanto o problema não for resolvido. Só responda Tudo certo se você conferiu de verdade."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "embalagem_protecao",
            "pergunta": "Você coloca uma miniatura delicada, de braços finos, em uma caixa muito maior que ela, sem nada em volta. Qual é o maior risco?",
            "opcoes": [
              "A caixa ficar cara demais para a peça.",
              "A peça se mexer e bater nas paredes da caixa, quebrando detalhes finos.",
              "A peça perder a cor por não encostar na proteção interna.",
              "A etiqueta não caber na caixa grande."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Com folga e sem nada para prender, a peça bate dentro da caixa.",
            "feedbackPorOpcao": [
              "O maior problema é a proteção da peça, não o preço ou a aparência da caixa.",
              null,
              "Folga não muda a cor. O risco é a batida.",
              "A etiqueta cabe. O risco de verdade é a peça se mexer lá dentro."
            ]
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "embalagem_protecao",
            "pergunta": "Marque o que mostra que a embalagem foi bem preparada.",
            "itens": [
              "A peça fica firme e não balança quando você mexe a caixa de leve.",
              "A proteção não aperta os detalhes frágeis.",
              "Vários itens soltos na mesma caixa, encostando uns nos outros.",
              "Foi usado o material padrão aprovado para a categoria.",
              "Sobrou espaço vazio para a peça se ajeitar no transporte."
            ],
            "corretos": [
              0,
              1,
              3
            ],
            "feedbackCerto": "Certo. Peça firme, sem aperto e com material aprovado.",
            "feedbackErrado": "Revise. Peças encostando e espaço vazio trazem risco de dano. Os sinais certos são peça firme, sem aperto e com o padrão aprovado."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "embalagem_protecao",
            "local": "Estação de expedição, área de materiais de embalagem",
            "instrucao": "Olhe os tipos de caixa e de proteção que há na estação, sem gastar material. Pense em qual você usaria para uma peça pequena e frágil e como deixaria a peça firme. Se tiver dúvida sobre o padrão, consulte o responsável. Marque como feito depois de ver onde está o padrão aprovado."
          }
        ]
      },
      {
        "dia": 6,
        "titulo": "Identificação",
        "subtitulo": "Evitar troca entre pacotes",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que identificar",
            "texto": "Cada pacote precisa mostrar com clareza o cliente, o pedido e o conteúdo, e levar as etiquetas necessárias. Essas informações vêm do pedido no Valente OS. A identificação precisa aguentar o manuseio. Etiqueta solta, borrada ou colada em lugar que descola não serve. Identificar protege a rastreabilidade. Rastreabilidade é conseguir saber de qual pedido aquele pacote veio."
          },
          {
            "tipo": "conteudo",
            "titulo": "O perigo das caixas iguais",
            "texto": "Duas caixas iguais, lado a lado e sem identificação, são um convite à troca. Em dia corrido, é fácil pegar a caixa errada e mandar para o cliente errado. Por isso, identifique cada pacote logo depois de fechar, antes de começar o próximo pedido. Trabalhe um pedido de cada vez na bancada. Não deixe pacotes sem identificação perto uns dos outros."
          },
          {
            "tipo": "conteudo",
            "titulo": "Antes de perder a rastreabilidade",
            "texto": "Identifique antes de perder a rastreabilidade. Se dois pacotes sem etiqueta se misturam, você só descobre o que há em cada um abrindo de novo. Antes de colar, confira se o nome e o pedido da etiqueta são iguais aos do sistema. Algo está difícil de ler ou diferente? Não improvise. Confirme no sistema ou com o responsável."
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "identificacao_envio",
            "pergunta": "Marque o que você deve conferir antes de terminar a identificação de um pacote.",
            "itens": [
              "O pedido da etiqueta é o mesmo do sistema.",
              "O nome do cliente está certo e dá para ler bem.",
              "A etiqueta pode ser colada depois, quando o pacote chegar à transportadora.",
              "A etiqueta está firme, em lugar que não descola com o manuseio.",
              "Basta confiar na memória para saber qual caixa é de qual pedido."
            ],
            "corretos": [
              0,
              1,
              3
            ],
            "feedbackCerto": "Certo. Conferir com o sistema e colar bem a etiqueta evita troca.",
            "feedbackErrado": "Revise. Deixar para depois e confiar na memória são as causas da troca."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "identificacao_envio",
            "pergunta": "Você acabou de fechar duas caixas iguais, de pedidos diferentes. Elas ainda estão sem identificação. O que fazer agora?",
            "opcoes": [
              "Separar as caixas, conferir pedido e cliente no sistema e identificar cada uma na hora.",
              "Deixar as duas juntas e identificar no fim do dia, com tudo pronto.",
              "Identificar uma e achar que a outra é a que sobrou.",
              "Deixar quem for despachar descobrir pelo peso."
            ],
            "correta": 0,
            "feedbackCerto": "Certo. Identificar logo depois de fechar mantém a rastreabilidade.",
            "feedbackPorOpcao": [
              null,
              "Quanto mais tempo sem identificação, maior o risco de troca.",
              "Achar não é identificar. Confirme as duas.",
              "O peso não serve para identificar um pacote com segurança."
            ],
            "erroCriticoOpcoes": [
              2
            ]
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "identificacao_envio",
            "local": "No computador ou no tablet Samsung, com o responsável",
            "instrucao": "Peça ao responsável para abrir um pedido na aba Pedidos. Só olhe, sem mudar nada. Leia o nome do cliente e o número do pedido. Depois, na estação de expedição, veja onde ficam as etiquetas e como você colaria uma na caixa. Marque como feito quando souber onde conferir os dados e onde colar a identificação."
          }
        ]
      },
      {
        "dia": 7,
        "titulo": "Endereço e dados de envio",
        "subtitulo": "Conferir, não presumir",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Fonte dos dados",
            "texto": "Os dados de envio são: destinatário, endereço, número, complemento, CEP e contato. Consulte esses dados no pedido e confira. A fonte é o registro do pedido no Valente OS. Não é a memória, nem uma conversa antiga, nem um endereço parecido de outro pedido. Compare a etiqueta com o registro, campo por campo."
          },
          {
            "tipo": "conteudo",
            "titulo": "Um número errado estraga tudo",
            "texto": "Um número de casa errado pode jogar fora todo o trabalho feito antes: a modelagem, a impressão, a pintura e a embalagem. O pacote pode voltar, atrasar ou ir para outro endereço. Depois que o pacote saiu, é difícil corrigir um dado de envio errado. Por isso a regra é: CONFERIR, NÃO PRESUMIR. Presumir é achar que sabe sem conferir."
          },
          {
            "tipo": "conteudo",
            "titulo": "Quando falta ou duvida",
            "texto": "Faltou um dado, como o complemento? Algo parece estranho? Não complete por conta própria. Peça a confirmação pelo canal correto. Normalmente, esse canal é o Comercial ou o responsável. Enquanto a dúvida não for resolvida, o pedido não deve ser despachado. Dizer não sei e consultar é o certo. Inventar um dado é errado."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "dados_envio",
            "cliente": "Colega do Comercial: o endereço do pedido está sem o número da casa. Mas o cliente mora na mesma rua de outro pedido dele, no 120. Usa o 120 aí.",
            "opcoes": [
              {
                "label": "Uso o 120, porque é a mesma rua e deve ser a mesma casa.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Presumir o número pode mandar o pacote para o lugar errado."
              },
              {
                "label": "Peço que o número seja confirmado com o cliente pelo canal correto e espero antes de despachar.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. Dado que falta é confirmado, nunca presumido."
              },
              {
                "label": "Escrevo sem o número e deixo a transportadora procurar.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Endereço incompleto aumenta o risco de o pacote atrasar ou se perder."
              },
              {
                "label": "Despacho assim mesmo e depois corrijo no sistema.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Despachar com dado incompleto vai contra a regra de conferir antes."
              }
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "dados_envio",
            "pergunta": "Na conferência, o CEP da etiqueta está diferente do CEP do pedido no Valente OS. O que fazer?",
            "opcoes": [
              "Confiar na etiqueta, porque foi impressa por um sistema.",
              "Corrigir a etiqueta com o CEP que você lembra da região.",
              "Parar e comparar com o registro do pedido. Se a diferença continuar, confirmar pelo canal correto.",
              "Despachar e esperar a transportadora avisar se der problema."
            ],
            "correta": 2,
            "feedbackCerto": "Certo. Dado diferente é motivo para parar e confirmar na fonte.",
            "feedbackPorOpcao": [
              "A etiqueta também pode ter erro. Confira com o registro do pedido.",
              "A memória não é fonte de dado.",
              null,
              "O erro seria descoberto tarde demais."
            ],
            "erroCriticoOpcoes": [
              1,
              3
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "dados_envio",
            "pergunta": "Você vai conferir os dados de envio de um pedido antes de despachar. Qual é o jeito certo?",
            "opcoes": [
              "Olhar só o nome do cliente. Se estiver certo, o resto também está.",
              "Comparar a etiqueta com o endereço que você lembra de outro pedido do cliente.",
              "Comparar a etiqueta com o pedido no Valente OS. Se faltar um dado, despachar e pedir a confirmação depois.",
              "Comparar a etiqueta com o pedido no Valente OS, campo por campo. Se faltar um dado, pedir a confirmação pelo canal correto e não despachar até resolver."
            ],
            "correta": 3,
            "feedbackCerto": "Certo. Você compara a etiqueta com o registro, campo por campo, e não despacha com dado faltando.",
            "feedbackErrado": "Revise. A fonte é o registro do pedido no Valente OS, comparado campo por campo. Dado que falta é confirmado pelo canal correto antes do despacho, nunca completado de memória."
          }
        ]
      },
      {
        "dia": 8,
        "titulo": "Despacho e rastreio",
        "subtitulo": "O pacote saiu de verdade",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Despacho é um fato",
            "texto": "Despacho é o momento em que o pacote sai de verdade da empresa para a entrega. Etiqueta impressa não quer dizer pacote enviado. Código gerado também não quer dizer que o pacote foi postado. Só vale como enviado quando o pacote foi entregue à transportadora ou enviado pela forma definida. Sobre transportadoras, comprovantes e registro, siga o procedimento definido pela Valente ou consulte o responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que registrar",
            "texto": "Depois do despacho, registre as informações pedidas e o rastreio, quando houver. Rastreio é o código para acompanhar o caminho do pacote. Na tarefa de Expedição, no tablet, você informa a transportadora ou a forma de envio e o código de rastreio. Assim o cliente e a equipe sabem que o pacote saiu e acompanham o caminho. Confira o código com cuidado. Um número errado deixa o rastreio sem uso."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que o tablet faz",
            "texto": "Ainda na tarefa de Expedição, você informa se o saldo está quitado ou combinado. Depois toca em Marcar como enviado. Esse toque move o pedido para Enviado no Kanban. Ele também cria sozinho a tarefa de Pós-compra para o Comercial, para 5 dias depois. Concluir a tarefa sem marcar como enviado não é o caminho. Por isso, só toque quando o pacote saiu de verdade."
          },
          {
            "tipo": "conteudo",
            "titulo": "Saldo e pagamento na entrega",
            "texto": "Na hora de marcar como enviado, o saldo pode estar quitado ou combinado. Instituições públicas podem ter pedido com empenho. Nesse caso, o recebimento acontece conforme o contrato e os trâmites do órgão. O número do empenho precisa existir antes de a produção começar. Nesse tipo de pedido, o saldo pode ficar como combinado, e não quitado. Confira o que o pedido registra. Se algo não bater, consulte o Comercial. Você não cobra nem negocia pagamento."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "despacho_kanban",
            "pergunta": "A etiqueta de envio foi impressa e o código de rastreio já foi gerado. Mas o pacote ainda está na sua bancada. Você pode marcar o pedido como enviado?",
            "opcoes": [
              "Sim. Com etiqueta e código, está tudo pronto para a transportadora.",
              "Sim. O rastreio avisa se algo der errado.",
              "Sim, desde que o Comercial saiba.",
              "Não. Etiqueta e código não provam que o pacote saiu."
            ],
            "correta": 3,
            "feedbackCerto": "Certo. O registro só vale depois que o pacote saiu de verdade.",
            "feedbackPorOpcao": [
              "Pronto não é o mesmo que despachado.",
              "O rastreio não conserta um registro falso de envio.",
              "O Comercial saber não torna verdadeiro um envio que não aconteceu.",
              null
            ],
            "erroCriticoOpcoes": [
              0,
              1,
              2
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "despacho_kanban",
            "afirmacao": "Na tarefa de Expedição, basta tocar em Concluir tarefa depois de embalar. Marcar como enviado é opcional.",
            "correta": false,
            "feedbackCerto": "Certo. O caminho da Expedição é Marcar como enviado, depois que o pacote saiu de verdade.",
            "feedbackErrado": "Falso. Concluir a Expedição sem marcar como enviado não é o caminho. O pedido não vai para Enviado e a tarefa de Pós-compra não é criada."
          },
          {
            "tipo": "ordenar",
            "competencia": "despacho_kanban",
            "instrucao": "Coloque na ordem certa as ações de despacho e registro.",
            "itens": [
              "Conferir os dados de envio e a identificação do pacote",
              "Entregar o pacote à transportadora ou fazer o envio",
              "Informar transportadora/forma de envio e código de rastreio na tarefa",
              "Informar o saldo (quitado ou combinado)",
              "Tocar em Marcar como enviado"
            ],
            "feedbackCerto": "Certo. Primeiro o fato, depois o registro.",
            "feedbackErrado": "Primeiro você confere. Depois despacha de verdade. Só então registra e marca como enviado."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "despacho_kanban",
            "local": "Valente OS (tablet) > tarefa de Expedição",
            "instrucao": "Abra uma tarefa de Expedição só para olhar. Não toque em Marcar como enviado. Ache os campos de transportadora/forma de envio, código de rastreio e saldo, e o botão Marcar como enviado. Marque como feito quando souber onde fica cada um."
          }
        ]
      },
      {
        "dia": 9,
        "titulo": "Atualizando o Kanban",
        "subtitulo": "Enviado é um fato",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O significado de Enviado",
            "texto": "As etapas do Kanban mostram a situação real do pedido: Negociação, Pago, Modelando, Imprimindo, Pós-impressão, Pintura, Preparar p/ envio e Enviado. A etapa Enviado mostra um fato: o envio aconteceu, conforme o critério da empresa. Embalagem pronta não é envio. Enquanto o pacote não saiu, o pedido continua em Preparar p/ envio."
          },
          {
            "tipo": "conteudo",
            "titulo": "Quem depende do status",
            "texto": "Se você marca Enviado antes do despacho, o Comercial pode dizer ao cliente algo que ainda não aconteceu. Marcar como enviado também cria a tarefa de Pós-compra para 5 dias depois. Então o contato com o cliente é contado a partir dessa data. Situação errada no sistema leva informação errada para o cliente e para a equipe."
          },
          {
            "tipo": "conteudo",
            "titulo": "Regra de ouro",
            "texto": "Só atualize quando a etapa aconteceu de verdade. Isso vale também para as outras etapas do Kanban e para marcar tarefas como concluídas. Marcar como feito algo que não foi feito é erro crítico. Marcou Enviado por engano? Avise o responsável na hora. Não tente esconder."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que vem depois do envio",
            "texto": "Depois do envio, o Comercial faz o contato de Pós-compra e registra uma de quatro respostas. Recebeu e está satisfeito: pede a avaliação e encerra. Ainda não recebeu: confere o rastreio e volta a falar em 2 dias. Há um problema: descreve e abre uma tarefa de resolução. Não respondeu: tenta de novo em 2 dias. O Comercial usa o rastreio que você registrou para responder ao cliente."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "despacho_kanban",
            "pergunta": "Na Pós-compra, o cliente diz que ainda não recebeu o pedido. O que o Comercial consulta primeiro para responder?",
            "opcoes": [
              "A foto da peça pintada, para provar a qualidade.",
              "A tarefa de Pintura, para ver quem fez.",
              "O código de rastreio e a transportadora registrados na Expedição.",
              "O Kanban de Negociação, para ver o valor do pedido."
            ],
            "correta": 2,
            "feedbackCerto": "Certo. Por isso o rastreio registrado na expedição precisa estar certo.",
            "feedbackPorOpcao": [
              "A qualidade da peça não diz onde o pacote está.",
              "A pintura não diz onde o pacote está.",
              null,
              "O valor não ajuda a achar o pacote."
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "despacho_kanban",
            "afirmacao": "Se a caixa está fechada, identificada e pronta na prateleira, o pedido já pode ser marcado como Enviado para adiantar o trabalho do Comercial.",
            "correta": false,
            "feedbackCerto": "Certo. Pronto para sair não é enviado. Só marque depois do despacho.",
            "feedbackErrado": "Falso. Enviado é um fato que já aconteceu. Marcar antes faz o Comercial dizer algo que não aconteceu."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "despacho_kanban",
            "pergunta": "Quando você toca em Marcar como enviado, o que o sistema faz sozinho?",
            "opcoes": [
              "Só muda a cor do cartão no Kanban, sem criar tarefa nova.",
              "Leva o pedido para Enviado e cria uma tarefa de Pós-compra para o Comercial, para 5 dias depois.",
              "Manda para o cliente a foto final da peça tirada pelo tablet.",
              "Volta o pedido para Pós-impressão para revisão."
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Por isso o toque só vale com o envio de verdade.",
            "feedbackPorOpcao": [
              "Além de mudar a etapa, o sistema cria a tarefa de Pós-compra.",
              null,
              "A foto final é feita em outro aparelho, não pelo tablet.",
              "Esse toque leva o pedido para a frente, para Enviado."
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "despacho_kanban",
            "pergunta": "Por que você só deve marcar um pedido como Enviado depois que o pacote saiu de verdade?",
            "opcoes": [
              "Porque Enviado é um fato. Se você marca antes, o Comercial pode dizer ao cliente algo que não aconteceu, e a tarefa de Pós-compra é criada contando a partir dessa data.",
              "Porque o Kanban só atualiza depois que a transportadora confirma a entrega ao cliente.",
              "Porque marcar antes só atrapalha a expedição. O Comercial e o cliente não são afetados.",
              "Porque marcar antes apaga o código de rastreio do pedido."
            ],
            "correta": 0,
            "feedbackCerto": "Certo. Enviado mostra que o pacote saiu de verdade. Marcar antes leva informação errada ao Comercial e ao cliente.",
            "feedbackErrado": "Revise. Enviado é um fato: o pacote saiu. Se você marca antes, o Comercial pode dizer ao cliente algo que não aconteceu, e a tarefa de Pós-compra é criada a partir da data errada."
          }
        ]
      },
      {
        "dia": 10,
        "titulo": "Missão Expedição",
        "subtitulo": "O caminho completo com um pedido simulado",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Como funciona a missão",
            "texto": "Você vai receber um pedido pronto, de treino, e fazer todo o caminho do curso. Conferir o conteúdo. Achar um erro colocado de propósito. Escolher a embalagem. Conferir os dados. Preparar a identificação. Simular o registro do despacho. A missão mostra se você prefere parar e corrigir em vez de enviar algo duvidoso. Tudo aqui é simulação e não muda dados reais."
          },
          {
            "tipo": "conteudo",
            "titulo": "Antes de começar",
            "texto": "Lembre o caminho: consultar o pedido, conferir o conteúdo, aprovar só o que está certo, embalar com proteção, identificar, conferir os dados, despachar e só então registrar. Teve dúvida? Consulte a ficha, o Valente OS ou o responsável. Não saber não é erro. Inventar é erro."
          },
          {
            "tipo": "cenario",
            "competencia": "conferencia_final",
            "titulo": "Pedido simulado: duas miniaturas e um acessório",
            "noInicial": "a",
            "nos": {
              "a": {
                "cliente": "O pedido simulado tem duas miniaturas pintadas e um acessório para cada uma. Na bancada há duas miniaturas e só um acessório. A pressa é grande, porque o cliente já perguntou do pedido. O que você faz?",
                "opcoes": [
                  {
                    "label": "Embalo as duas miniaturas com o acessório que tem e mando o resto depois, sem avisar.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Esconder a falta é erro crítico. A falta deve ser tratada, não escondida."
                  },
                  {
                    "label": "Paro a conferência, toco em Encontrei problema, informo o motivo e as peças afetadas e aviso o responsável antes de embalar.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Você achou a falta antes de fechar a caixa.",
                    "proximo": "b"
                  },
                  {
                    "label": "Conto as caixas, que estão certas, e sigo.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Contar caixas não mostra o que há dentro.",
                    "proximo": "b"
                  },
                  {
                    "label": "Pego um acessório parecido de outro pedido para completar.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Usar item de outro pedido causa troca e faz perder a rastreabilidade.",
                    "proximo": "b"
                  }
                ]
              },
              "b": {
                "cliente": "O responsável resolveu a falta e o pedido está completo. Agora você escolhe a embalagem. As miniaturas têm detalhes finos. São duas peças com acessórios. Como você prepara?",
                "opcoes": [
                  {
                    "label": "Uso uma caixa grande e coloco tudo solto. O importante é caber.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Com folga, as peças batem umas nas outras.",
                    "proximo": "c"
                  },
                  {
                    "label": "Uso o padrão aprovado. Protejo cada peça separada e deixo tudo firme, sem balançar.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Cada peça protegida, tudo firme e com o padrão aprovado.",
                    "proximo": "c"
                  },
                  {
                    "label": "Aperto bem tudo em uma caixa pequena para não se mexer.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Aperto demais pode estragar os detalhes frágeis.",
                    "proximo": "c"
                  },
                  {
                    "label": "Improviso uma embalagem fora do padrão, porque é mais rápido.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Deixar o padrão aprovado de lado sem consultar é arriscado.",
                    "proximo": "c"
                  }
                ]
              },
              "c": {
                "cliente": "A caixa está pronta. Na conferência, você vê que o endereço da etiqueta está sem complemento. O pedido no Valente OS tem uma observação que não esclarece. A transportadora vem buscar daqui a pouco. O que você faz?",
                "opcoes": [
                  {
                    "label": "Complemento é detalhe. Despacho assim mesmo e marco como enviado.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Despachar com dado duvidoso é erro. Marcar como enviado nessa situação também."
                  },
                  {
                    "label": "Invento um complemento comum na região para não atrasar.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Inventar dado é erro crítico. Conferir, não presumir."
                  },
                  {
                    "label": "Marco como enviado agora para adiantar e confirmo o complemento depois.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Enviado é um fato. Marcar antes cria informação falsa."
                  },
                  {
                    "label": "Não despacho. Peço a confirmação pelo canal correto, identifico a caixa e só registro o envio depois que o pacote sair de verdade.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Você conferiu, não presumiu e só registrou o que aconteceu de verdade."
                  }
                ]
              }
            }
          },
          {
            "tipo": "missao",
            "competencia": "despacho_kanban",
            "titulo": "Missão Expedição",
            "objetivo": "Fazer o caminho completo da expedição com um pedido simulado. Parar e corrigir antes de enviar algo duvidoso.",
            "contexto": "Você recebeu um pedido pronto, de treino, com duas miniaturas pintadas e acessórios. Este exercício é uma simulação. Não mude dados reais e não marque pedidos reais como enviados.",
            "tarefas": [
              "Consultar o pedido e fazer uma lista do conteúdo, comparando o que está na bancada com o registro",
              "Achar o erro colocado de propósito (falta, troca ou dano), separar o pedido, simular o registro de Encontrei problema (motivo e quantas peças) e avisar o responsável",
              "Escolher a embalagem pelo padrão aprovado e deixar a peça firme",
              "Conferir os dados de envio e a identificação do pacote, sem presumir nada",
              "Simular o registro do despacho: transportadora/forma de envio, rastreio, saldo (quitado ou combinado) e Marcar como enviado, só depois do envio real simulado",
              "Esperar a conferência do responsável para a liberação prática"
            ],
            "criterioConclusao": "Você achou o erro. Parou em vez de enviar algo duvidoso. Escolheu a embalagem e a identificação certas. Conferiu os dados. Só simulou o registro do despacho depois do envio. A liberação prática depende da conferência do responsável."
          }
        ]
      }
    ]
  },
  "gestao_producao": {
    "id": "gestao_producao",
    "nome": "Gestão da Produção",
    "descricao": "Aprenda a ler o Kanban, priorizar, planejar capacidade, tratar gargalos e retrabalho, distribuir trabalho e usar indicadores com gestão enxuta.",
    "icone": "📊",
    "versao": 3,
    "cargosPermitidos": [
      "admin",
      "supervisor"
    ],
    "competencias": [
      "Leitura do Kanban",
      "Priorização",
      "Capacidade e fluxo",
      "Gargalos",
      "Qualidade e melhoria",
      "Distribuição de trabalho"
    ],
    "criteriosConclusao": "Montar um plano fictício de prioridades, explicar impactos de prazo, segurança e capacidade; tratar pendências sem liberar produção indevidamente. Decisões reais exigem autorização do responsável.",
    "dias": [
      {
        "dia": 1,
        "titulo": "A fábrica vista pelo Kanban",
        "subtitulo": "O quadro mostra o trabalho de verdade, não é enfeite",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O Kanban é um retrato da fábrica",
            "texto": "Kanban é um quadro. Cada pedido é um cartão. Cada coluna é uma etapa do trabalho. No Valente OS, a aba Pedidos mostra as colunas Negociação, Pago, Modelando, Imprimindo, Pós-impressão, Pintura, Preparar p/ envio e Enviado. O quadro não existe para ficar bonito. Ele existe para mostrar o que acontece de verdade na fábrica. Se o cartão diz Imprimindo, mas a peça já está na bancada de acabamento, o quadro está errado. E toda decisão tomada com ele sai errada."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que o cartão mostra hoje",
            "texto": "Cada cartão mostra em que etapa da produção o pedido está, como modelagem, impressão ou pintura. A tela se atualiza sozinha a cada 60 segundos. Você não precisa recarregar. Mas o cartão só mostra o que alguém registrou no sistema. Veja também duas coisas. Pedido novo aparece em Aguardando liberação. E pedido de instituição sem empenho registrado não pode ser movido para uma etapa de produção."
          },
          {
            "tipo": "conteudo",
            "titulo": "Três sinais que o gestor aprende a notar",
            "texto": "O primeiro sinal é o acúmulo: muitos cartões na mesma coluna. O segundo é o cartão parado: um pedido que está no mesmo lugar há muito mais tempo que os outros. O terceiro é o trabalho que anda sem informação: o cartão muda de coluna, mas falta foto, observação ou registro do que foi feito. Esses sinais não dizem a causa. Eles dizem onde olhar. O quadro serve para você fazer boas perguntas. Ele não dá a resposta pronta."
          },
          {
            "tipo": "conteudo",
            "titulo": "Exemplo: dez cartões em Pintura",
            "texto": "Imagine dez cartões em Pintura. Pode faltar gente ou tempo na pintura. Pode ser um lote que chegou todo de uma vez. Pode ser um atraso lá atrás, que empurrou tudo para o mesmo dia. Ou o quadro pode estar desatualizado: as peças já foram para a embalagem e ninguém moveu o cartão. Cada causa pede uma ação diferente. Por isso a regra é: descubra a causa antes de agir. Pergunte a quem está na bancada, olhe a peça e confira a tarefa. Só depois decida."
          },
          {
            "tipo": "conteudo",
            "titulo": "Como agir na prática",
            "texto": "Ao olhar o quadro, siga estes passos. Primeiro, anote o que você vê: colunas cheias, colunas vazias e cartões parados. Segundo, escreva as explicações possíveis. Terceiro, liste o que você precisa conferir para saber qual explicação é a verdadeira: a tarefa, a conversa com quem faz o trabalho e a peça na bancada. Só então mude alguma coisa. Se faltar informação, procure a fonte. Dizer que não sabe não é erro. Inventar uma causa é erro."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "leitura_kanban",
            "pergunta": "A coluna Pintura tem dez cartões. As outras estão quase vazias. Qual é o melhor primeiro passo?",
            "opcoes": [
              "Conferir na bancada e nas tarefas se as peças estão mesmo em pintura, antes de mudar qualquer coisa",
              "Cobrar mais rapidez de quem pinta, já que o acúmulo está lá",
              "Mover os cartões para Preparar p/ envio para esvaziar a coluna",
              "Pedir ao Comercial que avise os clientes de que todos os pedidos vão atrasar"
            ],
            "correta": 0,
            "feedbackCerto": "Isso mesmo. Conferir a bancada mostra se o acúmulo é de verdade ou se o quadro está desatualizado.",
            "feedbackPorOpcao": [
              null,
              "Acúmulo é um sinal, não é a causa. Cobrar rapidez sem investigar pode pressionar a pessoa errada.",
              "Mover o cartão sem a peça estar pronta deixa o quadro errado e esconde o problema.",
              "Avisar atraso sem saber a causa é inventar informação. Primeiro levante os fatos."
            ],
            "erroCriticoOpcoes": [
              2,
              3
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "leitura_kanban",
            "afirmacao": "O Kanban se atualiza sozinho a cada 60 segundos. Por isso o cartão sempre mostra exatamente onde a peça está na bancada.",
            "correta": false,
            "feedbackCerto": "Certo. A tela mostra o que foi registrado. A bancada ainda precisa ser conferida.",
            "feedbackErrado": "Falso. A tela só mostra o que foi registrado. Se o registro atrasou, o cartão também atrasa. Confira a peça."
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "leitura_kanban",
            "pergunta": "Quais destes são sinais no quadro que você deve investigar?",
            "itens": [
              "Muitos cartões acumulados em uma coluna",
              "Um cartão parado há muito mais tempo que os outros",
              "Cartão que mudou de coluna sem registro do que foi feito",
              "Coluna Enviado com pedidos concluídos",
              "Uma coluna vazia por poucos minutos entre uma entrega e outra"
            ],
            "corretos": [
              0,
              1,
              2
            ],
            "feedbackCerto": "Certo. Acúmulo, cartão parado e avanço sem registro são sinais. Eles mostram onde olhar, não a causa.",
            "feedbackErrado": "Releia os três sinais: acúmulo, cartão parado e trabalho que anda sem informação. Pedido enviado e uma pausa normal não são sinais de problema."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "leitura_kanban",
            "local": "Valente OS no computador, aba Pedidos (Kanban)",
            "instrucao": "Só olhe o quadro, sem mover nenhum cartão. Anote em um papel as duas colunas com mais cartões e um cartão que parece parado. Para cada um, escreva uma explicação possível e o que você precisaria conferir. Não altere nada no sistema."
          }
        ]
      },
      {
        "dia": 2,
        "titulo": "Pedidos, tarefas e prioridades",
        "subtitulo": "Prioridade tem regra. Se tudo é urgente, nada é prioridade",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que é prioridade",
            "texto": "Prioridade é a ordem em que o trabalho deve ser feito quando não dá para fazer tudo ao mesmo tempo. Para decidir, o gestor olha várias coisas: a urgência real do cliente, a ordem de entrada dos pedidos, o que o Comercial já prometeu, o que precisa ficar pronto antes e o prejuízo de atrasar. Quando tudo vira urgente, a palavra perde o sentido. A equipe não sabe mais o que fazer primeiro."
          },
          {
            "tipo": "conteudo",
            "titulo": "Cuidado com a interrupção",
            "texto": "Trocar de trabalho tem custo. Veja um exemplo. Um lote está quase pronto. Você para o lote para começar outro pedido que parece mais importante. A impressora precisa ser preparada de novo. O lote parado fica esperando. O atraso total pode aumentar. Terminar o que já está em andamento costuma ser melhor do que começar coisa nova. Interrompa só quando houver motivo claro. E registre o motivo."
          },
          {
            "tipo": "conteudo",
            "titulo": "Pedido e tarefa contam a mesma história",
            "texto": "O pedido é o que o cliente comprou. Ele aparece como cartão no Kanban. A tarefa é o trabalho que alguém faz. Ela tem título, instruções, checklist e quantidade. No tablet, ela tem os botões Iniciar tarefa, Pausar, Retomar e Concluir tarefa. Ao definir a prioridade, confira se a ordem dos cartões e a ordem das tarefas contam a mesma história. Quem define as regras de prioridade e quem pode mudar é a Valente. Siga o procedimento da Valente ou consulte o responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "Do pedido novo à produção: o botão Liberar",
            "texto": "Pedido novo fica em Aguardando liberação. No cartão do Kanban existe o botão Liberar. Ele cria a ordem de produção, o plano e as tarefas. Se falta pagamento ou empenho, o botão avisa a pendência. Lembre: pedido sem liberação ainda não tem tarefas na fila da produção. Para saber quem libera e em que condição, siga o procedimento da Valente ou consulte o responsável."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "priorizacao",
            "pergunta": "Um pedido está em Aguardando liberação. O Comercial pede para colocar esse pedido na frente da fila. Qual é o melhor primeiro passo?",
            "opcoes": [
              "Começar a peça só pela conversa, sem liberar, para ganhar tempo",
              "Mover o cartão à mão para Imprimindo",
              "Ver se há pagamento ou empenho e usar Liberar. Se o botão avisar pendência, resolver com o Comercial antes de priorizar",
              "Deixar o pedido parado até alguém lembrar de liberar"
            ],
            "correta": 2,
            "feedbackCerto": "Certo. Primeiro resolva a pendência. Depois veja a prioridade.",
            "feedbackPorOpcao": [
              "Sem liberação não existem tarefas nem registro. O trabalho fica fora do sistema.",
              "Mover o cartão não substitui a liberação. A produção precisa das tarefas.",
              null,
              "Esperar sem fazer nada cria um atraso que dava para evitar. Veja a pendência."
            ],
            "erroCriticoOpcoes": [
              0,
              1
            ]
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "priorizacao",
            "cliente": "Gestor, esse pedido novo é urgente! O cliente quer para ontem. Para tudo e começa ele agora. O lote da outra impressora está quase acabando, mas deixa pra lá.",
            "opcoes": [
              {
                "label": "Entendo a urgência. Vou olhar a tarefa e ver quanto falta no lote atual, qual é o prazo real do pedido novo e se dá para encaixar sem parar o que está quase pronto.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Boa. Você pensa no custo de interromper e confere o prazo real antes de decidir."
              },
              {
                "label": "Pode parar o lote agora. Urgente sempre passa na frente.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Parar um lote quase pronto pode aumentar o atraso total. A urgência precisa ser conferida."
              },
              {
                "label": "Vou deixar o pedido novo por último, porque ele entrou depois.",
                "correta": false,
                "erroCritico": false,
                "feedback": "A ordem de entrada conta, mas não é a única regra. Ignorar a urgência real e o que o Comercial prometeu também dá problema."
              },
              {
                "label": "Não sei o prazo. Marque o novo como urgente e o do lote também. Assim ninguém fica de fora.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Marcar tudo como urgente acaba com a prioridade. A equipe fica sem saber o que fazer primeiro."
              }
            ]
          },
          {
            "tipo": "ordenar",
            "competencia": "priorizacao",
            "instrucao": "Chegou um pedido que dizem ser urgente. Coloque na ordem certa os passos de uma boa decisão de prioridade.",
            "itens": [
              "Levantar o prazo real do pedido novo e o que o Comercial prometeu",
              "Ver o que está em andamento e quanto falta para terminar",
              "Conferir o que precisa estar pronto antes, como arquivo, material e etapa seguinte",
              "Decidir a ordem e registrar o motivo",
              "Avisar a equipe e o Comercial sobre a decisão"
            ],
            "feedbackCerto": "Isso. Primeiro os fatos, depois a decisão, depois o aviso.",
            "feedbackErrado": "Comece pelos fatos: o prazo real e o que está em andamento. Depois confira o que precisa estar pronto antes. Só então decida e avise."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "priorizacao",
            "pergunta": "Quando vale a pena interromper um trabalho que já está em andamento?",
            "opcoes": [
              "Sempre que alguém disser que outro pedido é urgente",
              "Só com motivo claro, depois de ver o prazo real e quanto falta, e registrando o motivo",
              "Nunca, mesmo que exista um motivo claro",
              "Quando você mesmo decide mudar a regra de prioridade"
            ],
            "correta": 1,
            "feedbackCerto": "Certo. Parar um trabalho quase pronto tem custo. Só interrompa com motivo claro, e registre o motivo.",
            "feedbackErrado": "Interromper tem custo e pode aumentar o atraso total. Veja o prazo real e quanto falta. Só pare com motivo claro e registre o motivo. As regras de prioridade são da Valente."
          }
        ]
      },
      {
        "dia": 3,
        "titulo": "Capacidade das máquinas e das pessoas",
        "subtitulo": "Planeje o caminho todo, não só a máquina",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Capacidade é mais que impressoras",
            "texto": "Capacidade é quanto trabalho a fábrica consegue entregar em um período. Muita gente conta só as impressoras. Mas a capacidade tem várias partes: máquina disponível, tempo de ciclo (o tempo que cada peça leva do início ao fim), manutenção, material, pessoa que sabe operar e capacidade dos setores seguintes. A capacidade real é a menor dessas partes. É como uma corrente: ela é tão forte quanto o elo mais fraco."
          },
          {
            "tipo": "conteudo",
            "titulo": "Máquina, pessoa e etapa seguinte",
            "texto": "Faça três perguntas. Máquinas: quais estão disponíveis, em manutenção ou sem material? Pessoas: quem está presente e liberado para cada tarefa? Lembre que, em equipe pequena, a mesma pessoa pode cobrir várias funções. Etapas seguintes: a pós-impressão, a pintura e a embalagem dão conta do que sai da impressora? Se você olha só a primeira pergunta, enche a impressão e o resto fica sufocado."
          },
          {
            "tipo": "conteudo",
            "titulo": "Exemplo: o gargalo que só muda de lugar",
            "texto": "Gargalo é o ponto que segura o trabalho. Imprimir mais sem capacidade nas etapas depois da impressão só muda o gargalo de lugar. As peças saem mais rápido, mas ficam empilhadas esperando limpeza, cura e acabamento. Os cartões se acumulam em Pós-impressão e o pedido não anda mais rápido. Por isso a regra é planejar o caminho todo, não só o uso da máquina. Deixar uma impressora parada pode ser a decisão certa se a etapa seguinte já está lotada."
          },
          {
            "tipo": "conteudo",
            "titulo": "Pintura: ritmo por dia e estoque",
            "texto": "Na pintura de várias peças, ao tocar Concluir aparece a Produção do dia. Ela pergunta quantas peças foram pintadas, quantas estragaram e as anotações para amanhã. A tarefa fica pausada. No dia seguinte ela volta e soma as peças já pintadas. A caixa SUA MISSÃO mostra o que falta, por exemplo 8 de 18, com Já feitas 10. Use isso para ver o ritmo real, sem inventar meta. Já a aba Estoque guarda peças por endereço, sem pintura ou pintado. A Retirada guiada diz onde pegar. O estoque físico é diferente da contagem de produção."
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "capacidade_fluxo",
            "afirmacao": "Quando a pintura de várias peças não termina no dia, o certo é registrar a Produção do dia. A tarefa volta no dia seguinte e soma as peças já pintadas.",
            "correta": true,
            "feedbackCerto": "Certo. A produção por dia mostra ao gestor o ritmo real da pintura.",
            "feedbackErrado": "É verdadeiro. A tarefa fica pausada e volta no outro dia somando as pintadas. Isso mostra o ritmo real."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "capacidade_fluxo",
            "pergunta": "Três impressoras estão paradas. A equipe quer ligar todas no máximo. Mas a pós-impressão já tem peças esperando. O que deve acontecer?",
            "opcoes": [
              "As entregas ficam mais rápidas, porque saem mais peças das máquinas",
              "O acabamento passa a dar conta de mais peças, porque a equipe pratica mais",
              "Mais peças ficam esperando na pós-impressão. O gargalo só muda de lugar",
              "Nada muda, porque a pós-impressão se organiza sozinha"
            ],
            "correta": 2,
            "feedbackCerto": "Correto. Antes de imprimir mais, olhe se a etapa seguinte dá conta.",
            "feedbackPorOpcao": [
              "Peça impressa não é peça entregue. Se as etapas seguintes não dão conta, o pedido não anda.",
              "Mais peças não criam mais pessoas nem mais bancada.",
              null,
              "Sem planejar o caminho todo, a fila só cresce e o gargalo passa para essa etapa."
            ]
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "capacidade_fluxo",
            "pergunta": "Marque tudo o que entra na conta da capacidade real da fábrica.",
            "itens": [
              "Máquinas disponíveis e fora de manutenção",
              "Material disponível para imprimir",
              "Pessoas presentes e liberadas para a tarefa",
              "Capacidade das etapas depois da impressão",
              "Quantidade de cartões na coluna Enviado do mês passado"
            ],
            "corretos": [
              0,
              1,
              2,
              3
            ],
            "feedbackCerto": "Certo. A capacidade junta máquina, material, pessoas e etapas seguintes.",
            "feedbackErrado": "A capacidade olha o que está disponível agora: máquinas, material, pessoas e etapas seguintes. Pedido já enviado é passado, não é capacidade."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "capacidade_fluxo",
            "local": "Área de produção e Valente OS no computador, aba Pedidos",
            "instrucao": "Sem alterar nada, ande pela produção e olhe o Kanban. Anote quantas máquinas estão disponíveis hoje e quem está presente. Anote também se a pós-impressão, a pintura e o preparo para envio têm fila ou folga. Qual é a menor capacidade da lista?"
          }
        ]
      },
      {
        "dia": 4,
        "titulo": "Prazos e filas de produção",
        "subtitulo": "Prometa só o que a produção consegue cumprir",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Prazo e capacidade precisam combinar",
            "texto": "O prazo que o Comercial promete ao cliente precisa combinar com a capacidade da produção. Quem enxerga a fila real é o gestor da produção. Por isso ele deve passar informação realista e avisar do risco antes de o prazo vencer, não depois. Avisar cedo dá tempo de negociar com o cliente. Avisar quando o prazo já venceu só passa o problema adiante e acaba com a confiança."
          },
          {
            "tipo": "conteudo",
            "titulo": "Fila: quanto trabalho vem antes",
            "texto": "Fila é todo o trabalho que está esperando antes do seu pedido. Quanto maior a fila, maior a espera, mesmo que cada tarefa seja rápida. Um pedido novo não começa a ser feito na hora só porque entrou. Ele só entra na produção depois de liberado. E entra no fim da fila, a não ser que alguém decida dar prioridade. Para calcular um prazo, some o tempo das etapas e a espera entre elas. Use os dados da produção, não palpite."
          },
          {
            "tipo": "conteudo",
            "titulo": "Pagamento e empenho antes da produção",
            "texto": "Um pedido só vira trabalho depois de liberado, e a produção depende do pagamento. Quando o pagamento é Pix, transferência ou dinheiro, a tarefa Confirmar pagamento registra o valor e o pedido vai para Pago. Instituições públicas podem contratar com empenho e pagar conforme contrato e trâmites do órgão. Mas o número do empenho precisa existir antes de iniciar. Sem ele, o pedido fica Aguardando empenho. O Kanban bloqueia mover para etapa de produção. E a tarefa Cobrar empenho volta a cada 7 dias. Ao calcular o prazo, veja se esse pedido já pode começar."
          },
          {
            "tipo": "conteudo",
            "titulo": "Exemplo: cinco urgentes no mesmo dia",
            "texto": "Aceitar cinco pedidos urgentes para o mesmo dia não cria cinco vezes mais capacidade. A fábrica continua com as mesmas máquinas, pessoas e etapas. O mais provável é atrasar os cinco e também os pedidos que já estavam na fila. Não prometa só por otimismo. Se não tiver o dado, diga: preciso confirmar. Os prazos oficiais e as margens seguem o procedimento da Valente ou o responsável."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "capacidade_fluxo",
            "cliente": "Fala do Comercial: O cliente quer cinco peças personalizadas para amanhã. Posso confirmar? Você acha que dá, né?",
            "opcoes": [
              {
                "label": "Deixa eu olhar a fila, a capacidade de cada etapa e o material. Daqui a pouco te digo o que dá para prometer e o que é risco.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Boa. Você responde com dados e não promete no escuro."
              },
              {
                "label": "Confirma. A gente dá um jeito, sempre dá.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Otimismo sem dados gera prazo que não se cumpre."
              },
              {
                "label": "Não confirma nada. A fila está sempre cheia.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Recusar sem olhar os dados também não ajuda. A resposta precisa vir da fila real."
              },
              {
                "label": "Confirma. Se atrasar, eu aviso depois.",
                "correta": false,
                "erroCritico": true,
                "feedback": "O aviso de risco tem que vir antes de o prazo vencer, não depois."
              }
            ]
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "capacidade_fluxo",
            "cliente": "Comercial: Fechei com a prefeitura. O pagamento é por empenho, mas o número ainda não chegou. A prefeitura quer rápido. Move o cartão para Imprimindo para a gente adiantar?",
            "opcoes": [
              {
                "label": "Movo. Assim ganhamos tempo e o número chega depois.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Sem o número do empenho o trabalho não começa. E o Kanban bloqueia essa mudança."
              },
              {
                "label": "Não dá para começar sem o número. Deixo em Aguardando empenho, mantenho a cobrança andando e aviso que o prazo depende dele.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. Você respeita o bloqueio e avisa cedo do risco de prazo."
              },
              {
                "label": "Aviso o cliente de que todos os pedidos vão atrasar.",
                "correta": false,
                "erroCritico": false,
                "feedback": "O problema é só neste pedido. Avisar sobre todos cria confusão sem ter dados."
              },
              {
                "label": "Prometo começar em dois dias de qualquer jeito.",
                "correta": false,
                "erroCritico": true,
                "feedback": "É promessa sem dado e contra a regra do empenho."
              }
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "capacidade_fluxo",
            "afirmacao": "Aceitar vários pedidos urgentes para o mesmo dia aumenta a capacidade da produção na mesma medida.",
            "correta": false,
            "feedbackCerto": "Correto. A capacidade continua a mesma. O risco é atrasar todos os pedidos.",
            "feedbackErrado": "Falso. Máquinas, pessoas e etapas não aumentam por causa de um pedido urgente."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "capacidade_fluxo",
            "pergunta": "O Comercial pede o prazo de um pedido novo. Você ainda não olhou os dados. O que você faz?",
            "opcoes": [
              "Dá um prazo curto para agradar o cliente e ajusta depois, se precisar",
              "Soma só o tempo de impressão, sem contar a fila e a espera entre as etapas",
              "Diz que não dá para atender, porque a fila está sempre cheia",
              "Diz que precisa confirmar, olha a fila, a capacidade e o material, e avisa do risco antes de o prazo vencer"
            ],
            "correta": 3,
            "feedbackCerto": "Certo. O prazo vem dos dados: fila, tempo e espera das etapas, capacidade, material e arquivo. E o risco se avisa antes de o prazo vencer.",
            "feedbackErrado": "Prazo não se dá por palpite. Diga que precisa confirmar. Olhe a fila, o tempo e a espera das etapas, a capacidade, o material e o arquivo. Avise o Comercial do risco antes de o prazo vencer."
          }
        ]
      },
      {
        "dia": 5,
        "titulo": "Como achar gargalos",
        "subtitulo": "Descubra a causa antes de cobrar rapidez",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que é gargalo",
            "texto": "Gargalo é o ponto que segura o trabalho naquele momento. É como o gargalo de uma garrafa: por mais água que entre, só sai o que passa por ali. O gargalo pode ser uma máquina, uma pessoa, uma aprovação do cliente, um arquivo com erro, falta de material ou falta de informação. E ele muda de lugar: você resolve um e aparece outro. Por isso o gestor precisa olhar de novo sempre."
          },
          {
            "tipo": "conteudo",
            "titulo": "Acúmulo é sinal, não é causa",
            "texto": "Cartões acumulados mostram que algo está segurando o trabalho. Mas não dizem o quê. Veja um exemplo. Há cartões parados em Modelando. Pode ser que falte a referência do cliente, e não que o modelador esteja lento. Se o gestor cobra rapidez sem investigar, pressiona a pessoa errada e o problema continua. A regra é: descubra a causa antes de cobrar rapidez."
          },
          {
            "tipo": "conteudo",
            "titulo": "Como investigar",
            "texto": "Siga um caminho simples. Veja onde o trabalho espera mais. Pergunte a quem faz o trabalho o que está impedindo, sem acusar. Confira a tarefa, o arquivo e o pedido. Teste a sua ideia: se a causa for essa, o que muda quando ela for resolvida? Por fim, trate a causa e registre. Uma boa dica é perguntar cinco vezes o porquê, até chegar em algo que dá para consertar, como um jeito de trabalhar ou uma informação que faltava."
          },
          {
            "tipo": "conteudo",
            "titulo": "Gargalos que não estão na bancada",
            "texto": "Nem todo pedido parado está esperando uma máquina. Um pedido novo pode estar em Aguardando liberação. Um pedido de instituição pública pode estar em Aguardando empenho, sem produção até existir o número. A arte pode estar esperando a aprovação do cliente. Quando o cliente pede ajustes, nasce uma tarefa de Modelagem de ajuste. A tarefa Aprovar arte fica bloqueada até ela terminar. Depois é liberada sozinha. Antes de cobrar a produção, olhe o cartão e as tarefas do pedido para saber em qual desses casos ele está."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "gargalos",
            "pergunta": "O cliente pediu ajustes na arte. Surgiu a tarefa Modelagem de ajuste e a tarefa Aprovar arte está bloqueada. O que acontece quando a modelagem do ajuste termina?",
            "opcoes": [
              "Alguém precisa reabrir à mão a tarefa Aprovar arte",
              "A arte passa a valer como aprovada e a impressão é liberada",
              "O pedido volta para Negociação e começa de novo",
              "Aprovar arte é liberada sozinha, para o cliente ver a nova versão"
            ],
            "correta": 3,
            "feedbackCerto": "Certo. A tarefa bloqueada é liberada sozinha quando a anterior termina.",
            "feedbackPorOpcao": [
              "O sistema libera sozinho. Esperar alguém reabrir cria um gargalo que não existe.",
              "Só o cliente aprova a arte. Dar como aprovada sem resposta libera a impressão com a versão errada.",
              "Nada manda o pedido para trás. Só a aprovação volta para ser feita de novo.",
              null
            ],
            "erroCriticoOpcoes": [
              1
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "gargalos",
            "pergunta": "Há seis cartões parados em Modelando e o prazo apertou. O que é melhor fazer?",
            "opcoes": [
              "Cobrar do modelador que acelere, porque os cartões estão com ele",
              "Perguntar ao modelador e olhar os pedidos para ver se falta referência, aprovação ou arquivo, antes de cobrar",
              "Mover os cartões para Imprimindo para destravar a fila",
              "Contratar ajuda para modelar, porque está claro que a modelagem é o gargalo"
            ],
            "correta": 1,
            "feedbackCerto": "Isso. O acúmulo é um sinal. Investigar mostra a causa real.",
            "feedbackPorOpcao": [
              "Pode estar faltando informação do cliente. Cobrar rapidez pressiona a pessoa errada.",
              null,
              "Avançar sem o modelo pronto gera retrabalho e esconde o problema.",
              "Decidir a causa antes de investigar é palpite. Pode nem ser falta de capacidade."
            ],
            "erroCriticoOpcoes": [
              2
            ]
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "gargalos",
            "pergunta": "Marque tudo o que pode ser um gargalo na produção.",
            "itens": [
              "Uma máquina com manutenção atrasada",
              "Um cliente que demora a aprovar o orçamento ou a arte",
              "Um arquivo com erro que precisa voltar para a modelagem",
              "Falta de material de impressão",
              "Uma coluna do Kanban com cor diferente"
            ],
            "corretos": [
              0,
              1,
              2,
              3
            ],
            "feedbackCerto": "Certo. O gargalo pode ser máquina, aprovação, arquivo, material ou informação.",
            "feedbackErrado": "Gargalo é qualquer ponto que segura o trabalho: máquina, pessoa, aprovação, arquivo, material ou informação. A cor da coluna não segura nada."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "gargalos",
            "pergunta": "Uma coluna do Kanban está com muitos cartões acumulados. O que isso mostra?",
            "opcoes": [
              "Que algo segura o trabalho ali. Pode ser máquina, pessoa, informação ou a etapa seguinte, e você precisa conferir",
              "Que a pessoa daquela etapa está lenta e precisa ser cobrada",
              "Que falta máquina naquela etapa",
              "Que o quadro está errado e basta mover os cartões"
            ],
            "correta": 0,
            "feedbackCerto": "Certo. O acúmulo tem várias causas possíveis. Confira com a tarefa, a conversa com quem faz e a peça, sem culpar ninguém antes.",
            "feedbackErrado": "Acúmulo é sinal, não é causa. Pode ser máquina, pessoa, informação ou a etapa seguinte. Confira com a tarefa, a conversa com quem faz e a peça. Não culpe ninguém antes de investigar."
          }
        ]
      },
      {
        "dia": 6,
        "titulo": "Falhas, retrabalho e reimpressões",
        "subtitulo": "Trate a causa, não pague de novo pelo mesmo erro",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Retrabalho custa capacidade",
            "texto": "Retrabalho é fazer de novo o que já devia estar certo. Exemplos: reimprimir uma peça que falhou, pintar de novo ou corrigir um arquivo. Ele gasta material e tempo. E ainda ocupa a máquina e as pessoas que podiam estar fazendo pedidos novos. Em uma equipe pequena, uma reimpressão tira horas de máquina e de gente do que está na fila. Quanto mais retrabalho, menos entrega."
          },
          {
            "tipo": "conteudo",
            "titulo": "Registrar para ver o que se repete",
            "texto": "Para tratar a causa, você precisa registrar a falha: o que falhou, em qual etapa, em qual máquina ou material e o que foi feito. Com isso dá para ver o que se repete. Se várias impressões falham pelo mesmo motivo e a equipe só reimprime, a Valente paga várias vezes pela mesma causa. O registro não serve para punir quem avisa. Quando a pessoa tem medo, ela esconde a falha. E a repetição nunca aparece."
          },
          {
            "tipo": "conteudo",
            "titulo": "Correção imediata e ação preventiva",
            "texto": "São duas coisas diferentes. A correção imediata resolve o pedido de agora: reimprimir, pintar de novo, refazer. A ação preventiva trata a causa para a falha não voltar. Exemplos: revisar o suporte do modelo, conferir o nivelamento, olhar o estado do material ou ajustar a instrução da tarefa. Faça as duas. A primeira só apaga o incêndio. A segunda evita o próximo. Para reimpressão, siga o procedimento da Valente ou consulte o responsável."
          },
          {
            "tipo": "conteudo",
            "titulo": "Como o sistema registra falha e retrabalho",
            "texto": "Cada janela de conclusão guarda dados. O gestor usa esses dados para ver o que se repete. Na impressão, as respostas são Tudo certo, Saiu só parte, Falhou e Cancelada, com registro por fornada. Nas etapas de produção, Concluir etapa pergunta quantas peças ficaram prontas e quantas voltam para a fase anterior, com o motivo. Na pintura, a Produção do dia e o Fechar a pintura registram as peças estragadas e as que voltam. Na Conferência e Embalagem, Encontrei problema pede o motivo e a quantidade. Leia esses motivos antes de escolher a ação preventiva."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "qualidade_melhoria",
            "pergunta": "Você conclui uma etapa de 10 peças. 3 estão com defeito e precisam voltar. Como deve ficar o registro?",
            "opcoes": [
              "10 prontas. O defeito se corrige depois, sem registro",
              "7 prontas e 3 voltando para a fase anterior, com o motivo",
              "Deixar a etapa aberta e não registrar nada até resolver",
              "Contar as 3 como prontas e avisar só por conversa"
            ],
            "correta": 1,
            "feedbackCerto": "Certo. A quantidade e o motivo ficam registrados. Depois dá para ver se a falha se repete.",
            "feedbackPorOpcao": [
              "Marcar como pronto o que não está pronto esconde o defeito. E ele segue adiante.",
              null,
              "Sem registro, o motivo se perde e ninguém vê que a falha se repete.",
              "Conversa não fica registrada. Deixar o defeito seguir como pronto é erro grave."
            ],
            "erroCriticoOpcoes": [
              0,
              3
            ]
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "qualidade_melhoria",
            "cliente": "Colega: A peça do lote falhou de novo. Eu só aperto reimprimir e pronto, né? Não vou anotar que falhou, senão vão achar que eu errei.",
            "opcoes": [
              {
                "label": "Reimprima para atender o pedido. Mas anote o que falhou, onde e com qual material. O registro não é para punir. É para achar a causa e a falha não voltar.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. Correção imediata e registro para a ação preventiva, sem culpar ninguém."
              },
              {
                "label": "Reimprime e esquece. Se anotar, vai dar problema para você.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Esconder a falha impede de ver o que se repete. E o custo volta."
              },
              {
                "label": "Para tudo e investiga até ter certeza da causa. Só depois reimprime.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Parar tudo é exagero. A correção imediata e a prevenção podem andar juntas."
              },
              {
                "label": "Reimprima e diga ao cliente que a peça foi feita normalmente.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Esconder a falha do cliente e da equipe é passar informação falsa."
              }
            ]
          },
          {
            "tipo": "ordenar",
            "competencia": "qualidade_melhoria",
            "instrucao": "Uma falha de impressão se repetiu. Coloque na ordem certa o que fazer.",
            "itens": [
              "Cuidar da segurança e parar o que está com risco",
              "Corrigir o pedido atual (reimprimir ou refazer)",
              "Registrar o que falhou, onde e em que condição",
              "Comparar com outras falhas para ver o que se repete",
              "Escolher e aplicar a ação preventiva"
            ],
            "feedbackCerto": "Isso. Do imediato ao preventivo, sempre com registro.",
            "feedbackErrado": "Primeiro a segurança e a correção do pedido. Depois o registro, a comparação com outras falhas e a prevenção."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "qualidade_melhoria",
            "local": "Valente OS (aba Tarefas no computador ou Minhas funções no tablet) e área de produção",
            "instrucao": "Só consulte, sem alterar dados reais. Pense em uma falha recente que você viu ou de que ouviu falar. Escreva em um papel a correção imediata, a causa provável e uma ação preventiva possível."
          }
        ]
      },
      {
        "dia": 7,
        "titulo": "Distribuição de trabalho",
        "subtitulo": "Quem pode fazer o quê, e não só quem está livre",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O que olhar para distribuir",
            "texto": "Distribuir trabalho é decidir quem faz cada tarefa. Olhe cinco coisas. Qualificação: a pessoa sabe fazer e está liberada? Disponibilidade: ela tem tempo? Dificuldade da tarefa. Prioridade. E continuidade: quem já começou o trabalho conhece o caso, e manter essa pessoa evita troca sem necessidade. Em uma equipe de três pessoas, em que as funções passam de um para outro, isso pesa ainda mais. Qualquer um pode acabar fazendo qualquer coisa."
          },
          {
            "tipo": "conteudo",
            "titulo": "Livre não quer dizer liberado",
            "texto": "Uma pessoa pode estar parada e mesmo assim não estar liberada para aquele tipo de trabalho. Colocar alguém sem treino em uma tarefa crítica, só porque está livre, traz risco de retrabalho, de acidente e de peça perdida. A matriz de qualificação é uma tabela. Ela mostra quem está liberado em cada competência, que é cada tipo de trabalho que a pessoa aprendeu. Ela evita esse erro e também mostra quem precisa de treinamento."
          },
          {
            "tipo": "conteudo",
            "titulo": "Status de competência",
            "texto": "Quando o sistema estiver pronto, use os status de competência: Não iniciado, Em capacitação, Prática supervisionada, Liberado e Reciclagem. Quem está em Prática supervisionada pode fazer a tarefa, mas com alguém acompanhando. Quem está em Reciclagem precisa rever o conteúdo. Se faltar o dado, consulte o responsável. Quem define as regras de liberação é a Valente. Não suponha que uma pessoa está liberada."
          },
          {
            "tipo": "conteudo",
            "titulo": "Quem fez e onde ver o trabalho",
            "texto": "O PIN mostra quem fez o trabalho. O nome aparece no topo da tela e fica gravado como responsável nas tarefas que a pessoa inicia ou conclui. Por isso o registro só é verdadeiro se cada um usa o seu PIN. No tablet, Minhas funções abre uma fila única com as tarefas da função da pessoa, com filtros por tipo e o botão Próxima da fila. Outras funções mostra tarefas de colegas, para você ajudar. No computador, a aba Tarefas lista as tarefas passadas para a pessoa. Cada tarefa abre com a caixa SUA MISSÃO, que diz o que falta fazer."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "distribuicao_trabalho",
            "cliente": "Colega: O tablet ficou com o PIN do Pedro. Vou iniciar essa pintura no nome dele mesmo. Ele está ocupado e nem vai notar.",
            "opcoes": [
              {
                "label": "Pode usar. O importante é a tarefa andar.",
                "correta": false,
                "erroCritico": true,
                "feedback": "O responsável gravado seria o Pedro, que não fez o trabalho. O registro fica falso."
              },
              {
                "label": "Peça para o Pedro iniciar quando puder e deixe a tarefa parada até lá.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Parar o trabalho sem necessidade atrasa tudo. Quem vai fazer deve entrar com o próprio PIN."
              },
              {
                "label": "Entre com o seu PIN e pegue a tarefa em Outras funções, se for ajudar. Assim fica gravado quem fez de verdade.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. O PIN mostra quem fez. E Outras funções existe para você ajudar."
              },
              {
                "label": "Inicie com o PIN do Pedro e conclua com o seu. Assim fica dividido.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Misturar os PINs mistura os responsáveis e esconde quem fez cada parte."
              }
            ]
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "distribuicao_trabalho",
            "pergunta": "O Pedro está sem tarefa. Em pintura, o status dele é Em capacitação. Chegou uma peça de pintura com prazo apertado. O que fazer?",
            "opcoes": [
              "Dar a ele só a parte que o status permite, com acompanhamento, e deixar a tarefa crítica para quem está Liberado",
              "Passar a tarefa inteira para ele, porque está livre e assim aprende",
              "Deixar o Pedro parado e adiar a peça até todos estarem liberados",
              "Passar a tarefa inteira para a pessoa mais experiente, mesmo que ela esteja ocupada com outra urgente"
            ],
            "correta": 0,
            "feedbackCerto": "Correto. Você equilibra qualificação, acompanhamento e disponibilidade.",
            "feedbackPorOpcao": [
              null,
              "Livre não é liberado. Tarefa crítica sem qualificação traz retrabalho e risco.",
              "Existe um meio-termo: uma parte acompanhada, que combine com o status dele.",
              "Sobrecarregar alguém sem olhar disponibilidade e prioridade cria um novo gargalo."
            ],
            "erroCriticoOpcoes": [
              1
            ]
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "distribuicao_trabalho",
            "pergunta": "Marque o que o gestor deve olhar ao distribuir uma tarefa.",
            "itens": [
              "Se a pessoa está liberada na competência",
              "Se a pessoa tem tempo disponível",
              "A dificuldade da tarefa",
              "A continuidade de quem já começou o trabalho",
              "Quem reclama menos"
            ],
            "corretos": [
              0,
              1,
              2,
              3
            ],
            "feedbackCerto": "Certo. Qualificação, disponibilidade, dificuldade, prioridade e continuidade.",
            "feedbackErrado": "O que conta é qualificação, disponibilidade, dificuldade, prioridade e continuidade. Quem reclama menos não é motivo para escolher."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "distribuicao_trabalho",
            "local": "Centro de Capacitação e Valente OS (aba Tarefas no computador ou Minhas funções no tablet)",
            "instrucao": "Sem alterar nada, escolha uma tarefa da produção. Anote qual competência ela exige e quem da equipe você acha que está liberado. Anote como você confirmaria isso na fonte: no status de competência ou com o responsável."
          }
        ]
      },
      {
        "dia": 8,
        "titulo": "Qualidade e liberações",
        "subtitulo": "Feita, conferida e liberada são coisas diferentes",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Três estados diferentes",
            "texto": "Tarefa feita, tarefa conferida e tarefa liberada são três coisas diferentes. Feita: alguém diz que fez. Conferida: outra pessoa olhou e confirmou. Liberada: está aprovada para ir à próxima etapa ou ao cliente. Dizer terminei não substitui a conferência quando o processo pede validação. Em trabalhos críticos, a conferência protege a pessoa, o cliente e a Valente."
          },
          {
            "tipo": "conteudo",
            "titulo": "Ponto de controle",
            "texto": "Ponto de controle é o momento em que alguém confere o trabalho antes de ele seguir. Exemplos: antes de passar da impressão para o acabamento, antes da pintura, antes de embalar. Quanto mais cedo o defeito é achado, menos ele custa. Uma peça com defeito que segue adiante soma o custo de pintura, embalagem e envio. Nunca passe adiante um trabalho com defeito só para cumprir o prazo."
          },
          {
            "tipo": "conteudo",
            "titulo": "Quem valida",
            "texto": "O gestor deve definir quem pode validar competências e trabalhos críticos. Em uma equipe pequena, isso evita que a mesma pessoa faça e libere sem ninguém olhar de novo. Quais são os pontos de controle e quem libera na Valente? Siga o procedimento da Valente ou consulte o responsável. Não crie regra própria."
          },
          {
            "tipo": "conteudo",
            "titulo": "Conferência, embalagem e o botão Liberar",
            "texto": "No tablet, Conferência e Embalagem terminam com duas respostas: Tudo certo ou Encontrei problema, com o motivo e quantas peças. Um problema registrado impede o pedido de seguir. Na Expedição, o caminho é Marcar como enviado, com a forma de envio e o rastreio. Concluir sem marcar como enviado não é o certo. Cuidado com a palavra liberar. O botão Liberar do Kanban libera o pedido novo para a produção e cria as tarefas. Ele não é a liberação de qualidade. Quem confere e quem libera cada etapa segue o procedimento da Valente."
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "qualidade_melhoria",
            "afirmacao": "Se alguém registra Encontrei problema na Conferência, o pedido não segue para a próxima etapa até o problema ser tratado.",
            "correta": true,
            "feedbackCerto": "Certo. O registro de problema é um ponto de controle. Ele impede o pedido de seguir com defeito.",
            "feedbackErrado": "É verdadeiro. Encontrei problema, com motivo e quantidade, impede o pedido de seguir. É isso que protege o cliente."
          },
          {
            "tipo": "resposta_cliente",
            "competencia": "qualidade_melhoria",
            "cliente": "Colega: Terminei a pintura do lote. Pode marcar como liberado e mandar para a embalagem. Ninguém precisa olhar de novo.",
            "opcoes": [
              {
                "label": "Que bom que terminou. Vou conferir pelo procedimento da Valente ou chamar quem faz a liberação antes de seguir.",
                "correta": true,
                "erroCritico": false,
                "feedback": "Certo. Terminar não é liberar. A conferência vem antes."
              },
              {
                "label": "Pode seguir, confio em você.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Confiança não substitui a validação quando o processo pede."
              },
              {
                "label": "Marca como liberado agora. A gente confere depois, se der tempo.",
                "correta": false,
                "erroCritico": true,
                "feedback": "Seguir sem conferir pode levar defeito ao cliente."
              },
              {
                "label": "Refaça tudo, por segurança.",
                "correta": false,
                "erroCritico": false,
                "feedback": "Refazer sem avaliar gera retrabalho sem necessidade. Confira primeiro."
              }
            ]
          },
          {
            "tipo": "verdadeiro_falso",
            "competencia": "qualidade_melhoria",
            "afirmacao": "Quando uma pessoa diz que terminou, o trabalho já pode ser considerado liberado.",
            "correta": false,
            "feedbackCerto": "Correto. Terminar e liberar são coisas diferentes. Quando o processo pede, a conferência vem antes.",
            "feedbackErrado": "Falso. Feita, conferida e liberada são três coisas diferentes."
          },
          {
            "tipo": "confirmacao_pratica",
            "competencia": "qualidade_melhoria",
            "local": "Valente OS no computador, aba Pedidos e aba Tarefas",
            "instrucao": "Sem alterar nada no sistema, escolha uma etapa do Kanban. Escreva em um papel onde você colocaria um ponto de controle e o que seria conferido. Escreva também a quem você perguntaria quem é o responsável oficial pela liberação."
          }
        ]
      },
      {
        "dia": 9,
        "titulo": "Indicadores e melhoria contínua",
        "subtitulo": "Medir para decidir, não para enfeitar",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Indicador serve para decidir",
            "texto": "Indicador é uma medida que ajuda a tomar decisão. Os mais comuns na produção são prazo (entregas no dia combinado), retrabalho, gargalos, produtividade, qualidade e capacidade. Eles só servem quando os dados são confiáveis. Se o quadro está desatualizado, todo indicador sai errado. Não crie uma medida só porque ela é fácil de contar. O mesmo vale para o registro. Quem fez, as falhas e a produção do dia só viram dado bom se forem registrados com cuidado em cada tarefa."
          },
          {
            "tipo": "conteudo",
            "titulo": "Um número sozinho engana",
            "texto": "O número de cartões movidos pode subir enquanto o retrabalho também sobe. A equipe parece produzir mais, mas está só refazendo. Por isso, olhe os indicadores juntos: produtividade junto com retrabalho e prazo. Também não use indicador para punir. Quando isso acontece, as pessoas mexem nos dados para parecer bem. As metas em número são definidas pela Valente. Aqui você aprende a pensar, não a criar metas."
          },
          {
            "tipo": "conteudo",
            "titulo": "Melhoria contínua",
            "texto": "Melhoria contínua é um ciclo simples. Planeje uma mudança pequena. Faça. Veja o que mudou nos dados. Ajuste. Mude uma coisa por vez, para saber o que funcionou. Registre o que você testou. A pergunta que guia tudo é: que decisão este indicador melhora? Se ninguém decidiria nada diferente com ele, ele não precisa existir."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "qualidade_melhoria",
            "pergunta": "O número de cartões movidos por semana subiu. Mas as reimpressões também subiram. Como entender isso?",
            "opcoes": [
              "A produtividade melhorou, então não há problema",
              "O retrabalho subiu porque as pessoas estão mais rápidas",
              "Parar de medir cartões movidos e medir só reimpressões",
              "Olhar os dois juntos: a produtividade pode ser só aparência e esconder retrabalho"
            ],
            "correta": 3,
            "feedbackCerto": "Certo. Os indicadores são lidos juntos, sempre com dados confiáveis.",
            "feedbackPorOpcao": [
              "Um número sozinho engana. O retrabalho também subiu.",
              "Sem dados da causa, isso é palpite. Investigue antes de concluir.",
              "Um indicador só também engana. O melhor é juntar os dois e perguntar que decisão cada um ajuda a tomar.",
              null
            ]
          },
          {
            "tipo": "selecionar_itens",
            "competencia": "qualidade_melhoria",
            "pergunta": "Quais destes são bons motivos para escolher um indicador?",
            "itens": [
              "Ajuda a tomar uma decisão",
              "Os dados são confiáveis",
              "Pode ser lido junto com outros indicadores",
              "É fácil de contar, mesmo que ninguém use",
              "Serve para mostrar quem errou mais"
            ],
            "corretos": [
              0,
              1,
              2
            ],
            "feedbackCerto": "Certo. Indicador bom ajuda a decidir, tem dado confiável e é lido junto com outros.",
            "feedbackErrado": "Ser fácil de contar e servir para punir não são bons motivos. Indicador serve para decidir."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "qualidade_melhoria",
            "pergunta": "Você vai acompanhar o indicador de retrabalho. Qual é o jeito certo de usar?",
            "opcoes": [
              "Criar por conta própria uma meta em número para a equipe",
              "Olhar só o retrabalho, sem comparar com mais nada",
              "Ligar a uma decisão, usar dados confiáveis e ler junto com outro indicador, como o prazo",
              "Usar para mostrar quem errou mais"
            ],
            "correta": 2,
            "feedbackCerto": "Certo. O indicador serve a uma decisão, precisa de dado confiável e é lido junto com outro.",
            "feedbackErrado": "Indicador bom ajuda a tomar uma decisão, usa dados confiáveis e é lido junto com outro. As metas em número são da Valente. E indicador não serve para punir."
          }
        ]
      },
      {
        "dia": 10,
        "titulo": "Missão Gestão: um dia problemático",
        "subtitulo": "Usar tudo o que você aprendeu em um dia de imprevistos",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "O cenário",
            "texto": "Hoje é um dia difícil, inventado para o treinamento. Uma impressora parou. Chegou um pedido urgente. Há uma reimpressão em andamento. Um colega faltou. E entraram pedidos novos. Tudo ao mesmo tempo. Dizer que tudo é prioridade não vale ponto. A avaliação olha três coisas: se as suas decisões combinam entre si, se ficam registradas e se você usa bem a sua autonomia."
          },
          {
            "tipo": "conteudo",
            "titulo": "O roteiro do gestor",
            "texto": "Use a sequência do curso. Primeiro levante os fatos: o que parou, o que está em andamento, quem está presente. Confira se o pedido novo já foi liberado e se tem pagamento ou empenho registrado. Proteja a segurança e a qualidade. Ache o gargalo de agora. Defina a prioridade com regra e registre o motivo. Passe tarefas só para pessoas qualificadas. Avise do risco de prazo antes de ele vencer. Se faltar informação, consulte a fonte e o responsável. Não invente."
          },
          {
            "tipo": "cenario",
            "competencia": "priorizacao",
            "titulo": "Um dia problemático",
            "noInicial": "a",
            "nos": {
              "a": {
                "cliente": "Logo cedo: a impressora 2 parou com um lote pela metade. Um colega avisou que vai faltar hoje. E o Comercial pede para encaixar um pedido urgente. O que você faz primeiro?",
                "opcoes": [
                  {
                    "label": "Levanto os fatos: o que está parado, como está o lote, quem está presente e o que está na fila. Só depois decido.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Fatos antes das decisões.",
                    "proximo": "b"
                  },
                  {
                    "label": "Aceito o urgente na hora para não perder o cliente. Depois vejo como resolver.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Prometer sem dados de capacidade é o erro de otimismo que o curso ensinou.",
                    "proximo": "b"
                  },
                  {
                    "label": "Peço à equipe para tentar fazer tudo ao mesmo tempo. Hoje tudo é urgente.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Se tudo é urgente, não existe prioridade. E a equipe fica sobrecarregada.",
                    "proximo": "b"
                  },
                  {
                    "label": "Troco todo o plano da semana sem olhar o quadro.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Sem olhar o quadro, a decisão não tem base.",
                    "proximo": "b"
                  }
                ]
              },
              "b": {
                "cliente": "Fatos levantados: a máquina parada precisa de verificação. A pós-impressão está cheia. O colega que faltou era o único liberado em pintura. O urgente chegou. Como redistribuir?",
                "opcoes": [
                  {
                    "label": "Defino a prioridade com regra e protejo o que está quase pronto. Passo a pintura só a quem está Liberado, com acompanhamento para quem está em Prática supervisionada.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Regra, continuidade e qualificação.",
                    "proximo": "c"
                  },
                  {
                    "label": "Passo a pintura a quem estiver livre, sem olhar o status de competência.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Livre não é liberado. Há risco de retrabalho.",
                    "proximo": "c"
                  },
                  {
                    "label": "Peço que a máquina parada volte a funcionar logo, mesmo sem verificar a causa.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Voltar sem verificar é ignorar a segurança e a qualidade.",
                    "proximo": "c"
                  },
                  {
                    "label": "Mando imprimir tudo o que entrou para ocupar as máquinas.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Imprimir mais sem capacidade nas etapas seguintes só muda o gargalo de lugar.",
                    "proximo": "c"
                  }
                ]
              },
              "c": {
                "cliente": "No fim do dia, o prazo de dois pedidos está em risco. O Comercial pergunta como está. Como você responde?",
                "opcoes": [
                  {
                    "label": "Aviso do risco antes de o prazo vencer, com dados da produção: o que mudou, o que continua em risco e a nova previsão, confirmada na fonte.",
                    "correta": true,
                    "erroCritico": false,
                    "feedback": "Certo. Aviso cedo e com dados."
                  },
                  {
                    "label": "Digo que está tudo certo e resolvo depois.",
                    "correta": false,
                    "erroCritico": true,
                    "feedback": "Esconder o risco é passar informação falsa."
                  },
                  {
                    "label": "Digo que atrasou por culpa do colega que faltou.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "Culpar não ajuda e não é fato conferido. Fale do efeito no prazo e do plano."
                  },
                  {
                    "label": "Não respondo até ter certeza total do prazo.",
                    "correta": false,
                    "erroCritico": false,
                    "feedback": "O silêncio atrapalha. Avise do risco e diga o que ainda falta confirmar."
                  }
                ]
              }
            }
          },
          {
            "tipo": "missao",
            "competencia": "priorizacao",
            "titulo": "Missão Gestão: um dia problemático",
            "objetivo": "Montar o plano de um dia de imprevistos usando o que o curso ensinou, sem inventar regras e sem alterar dados reais.",
            "contexto": "Treinamento com situação inventada. Uma impressora parou. Há um pedido urgente e uma reimpressão em andamento. Um colega faltou e entraram pedidos novos. A equipe é pequena e as funções passam de um para outro.",
            "tarefas": [
              "Liste os fatos que você já sabe e o que ainda precisa confirmar. Diga a fonte de cada um",
              "Antes de encaixar o pedido urgente, confira no Kanban se ele já foi liberado e se o pagamento ou o empenho está registrado",
              "Diga quais regras de prioridade você usou e o motivo de cada decisão",
              "Ache o gargalo de agora e a causa provável, antes de cobrar rapidez",
              "Passe tarefas só para pessoas qualificadas e cite o status de competência",
              "Separe a correção imediata da ação preventiva para a falha que aconteceu",
              "Escreva o que você diria ao Comercial sobre o efeito no prazo, os riscos que continuam e quem precisa ser avisado"
            ],
            "criterioConclusao": "Você registrou o plano, o que mudou, os riscos que continuam e quem deve ser avisado, sem inventar números ou regras da Valente."
          }
        ]
      }
    ],
    "rotulosCompetencia": {
      "leitura_kanban": "Leitura do Kanban",
      "priorizacao": "Priorização",
      "capacidade_fluxo": "Capacidade e fluxo",
      "gargalos": "Gargalos",
      "qualidade_melhoria": "Qualidade e melhoria",
      "distribuicao_trabalho": "Distribuição de trabalho"
    }
  },
  "academia_gestao": {
    "id": "academia_gestao",
    "nome": "Academia de Gestão — Introdução",
    "descricao": "Introdução à administração do estúdio, com exemplos fictícios e atividades orientadas. Não substitui a formação completa em gestão.",
    "icone": "🎓",
    "versao": 4,
    "cargosPermitidos": [
      "admin",
      "supervisor"
    ],
    "competencias": [
      "Comunicação objetiva",
      "Decisão conjunta",
      "Disciplina e acordos",
      "Intervenção imediata",
      "Responsabilidade",
      "Antecipação"
    ],
    "criteriosConclusao": "Explicar com palavras próprias o conteúdo dos seis dias; resolver exemplos fictícios de comunicação, prazo, estoque e caixa; não alterar dados reais; obter avaliação do tutor. Esta trilha é introdutória e não substitui formação completa em administração.",
    "dias": [
      {
        "dia": 1,
        "titulo": "Conhecer o Valente OS e trabalhar com segurança",
        "subtitulo": "Como navegar, consultar e respeitar seus limites",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Objetivo da aula",
            "texto": "Hoje você vai ver a diferença entre administrar e produzir. Vai ver também por que o acesso de cada pessoa e os limites protegem a equipe. O foco é administrar. O sistema é um apoio. Use só exemplos inventados e não mude dados reais."
          },
          {
            "tipo": "conteudo",
            "titulo": "O que é administrar",
            "texto": "Administrar é planejar, organizar, acompanhar e corrigir. O Valente OS junta as informações do trabalho. Mas ele não confere os fatos por você. Antes de qualquer ação, veja qual é o pedido, quem é o responsável, qual é a etapa e o que a mudança vai causar."
          },
          {
            "tipo": "conteudo",
            "titulo": "Conheça as áreas",
            "texto": "Veja as abas liberadas para o seu perfil: Pedidos, Propostas, Orçamento, Caixa, Estoque, Produção e Centro de Capacitação. Nem todas aparecem para todos os cargos. Não tente passar por cima das permissões."
          },
          {
            "tipo": "conteudo",
            "titulo": "Exemplo resolvido: perfis de acesso",
            "texto": "Ana entra com o PIN dela, que é o código pessoal de entrada, e vê Produção e Capacitação. A gestora entra com o próprio PIN e vê também os relatórios administrativos. A diferença vem das permissões de cada perfil, não do número de pedidos. Cada pessoa usa só o seu acesso."
          },
          {
            "tipo": "conteudo",
            "titulo": "Primeira regra da Academia",
            "texto": "Nesta trilha, olhe as telas reais só para consultar. Nas respostas, use exemplos inventados. Não crie, edite, mova nem apague pedidos, lançamentos ou estoques de produção sem autorização clara e sem ambiente de teste aprovado."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "responsabilidade",
            "pergunta": "Uma colaboradora entra no Valente OS com o PIN dela e vê menos menus que a administradora. Por que isso acontece?",
            "opcoes": [
              "O PIN mostra quem é a pessoa, e as permissões do perfil dela definem os menus",
              "A quantidade de pedidos cadastrados define os menus",
              "A ordem em que as telas foram abertas define os menus para sempre"
            ],
            "correta": 0,
            "feedbackCerto": "Isso mesmo. O PIN mostra quem é a pessoa. As permissões do perfil definem o que ela pode usar.",
            "feedbackErrado": "Não é isso. Volte ao exemplo da Ana e da gestora e veja de onde vem a diferença entre os menus."
          },
          {
            "tipo": "multipla_escolha",
            "pergunta": "Qual destas atividades é administrar, e não produzir?",
            "opcoes": [
              "Imprimir uma miniatura",
              "Pintar uma peça",
              "Planejar e acompanhar os pedidos da semana"
            ],
            "correta": 2,
            "feedbackCerto": "Isso mesmo. Administrar é planejar, organizar, acompanhar e corrigir. Produzir é transformar material e trabalho em produto.",
            "feedbackErrado": "Não é isso. Imprimir e pintar são produzir, porque transformam material e trabalho em produto. Administrar é planejar, organizar, acompanhar e corrigir."
          },
          {
            "tipo": "checklist",
            "titulo": "Autoavaliação (não substitui a correção do instrutor)",
            "itens": [
              "Li as orientações da aula",
              "Respondi às perguntas e comparei minhas respostas com as explicações",
              "Se tive uma dúvida, sei o que preciso confirmar com o responsável"
            ]
          }
        ]
      },
      {
        "dia": 2,
        "titulo": "Falar de forma direta e registrar as decisões",
        "subtitulo": "O combinado precisa ser entendido e cumprido",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Objetivo da aula",
            "texto": "Hoje você vai aprender a comunicar um fato, o que ele causa e uma proposta. Vai ver também quem precisa decidir antes de mudar um combinado. O foco é administrar. O sistema é um apoio. Use só exemplos inventados e não mude dados reais."
          },
          {
            "tipo": "conteudo",
            "titulo": "Falar sem rodeios",
            "texto": "Uma boa comunicação diz o fato, a consequência, a proposta e a decisão que você precisa. Exemplo: “Faltam 200 g de resina para o pedido X. A impressão está marcada para amanhã. Sugiro ver a compra hoje. Podemos autorizar?”"
          },
          {
            "tipo": "conteudo",
            "titulo": "Decisão em conjunto",
            "texto": "Quando uma mudança mexe em custo, prazo, qualidade ou no que foi combinado com o cliente, fale com o responsável antes de fazer. Anote o que foi decidido, quem autorizou e quando."
          },
          {
            "tipo": "conteudo",
            "titulo": "Exemplo resolvido: registro de decisão",
            "texto": "Uma compra de resina precisa mudar de fornecedor. Antes da troca, a responsável informa o preço, o prazo e se o material serve. A decisão é tomada em conjunto e anotada com data e responsável. Só depois a compra é alterada."
          },
          {
            "tipo": "conteudo",
            "titulo": "Não mude o plano em silêncio",
            "texto": "Teve uma ideia melhor? Mostre os ganhos, os riscos e os custos. Até a decisão ser revista, siga o combinado. A exceção é quando for preciso parar uma ação insegura ou evitar um dano que está para acontecer."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "decisao_conjunta",
            "pergunta": "Um fornecedor oferece um material diferente, que parece mais barato. O que você faz?",
            "opcoes": [
              "Compra uma unidade para testar e troca o lote sem registrar",
              "Vê se o material serve, informa custos e riscos e pede a decisão antes de mudar a compra",
              "Mantém a compra antiga e só fala da oferta no fechamento do mês"
            ],
            "correta": 1,
            "feedbackCerto": "Isso mesmo. Mudança importante é conversada e registrada antes de ser feita.",
            "feedbackErrado": "Não é isso. Volte ao exemplo da troca de fornecedor e veja o que a responsável fez antes de mudar a compra."
          },
          {
            "tipo": "ordenar",
            "instrucao": "Coloque na ordem certa as partes de uma mensagem sobre falta de resina:",
            "itens": [
              "Fato: faltam 200 g de resina para o pedido X",
              "Consequência: a impressão está marcada para amanhã",
              "Proposta: sugiro ver a compra hoje",
              "Decisão pedida: podemos autorizar?"
            ],
            "feedbackCerto": "Isso mesmo. Primeiro o fato, depois a consequência, a proposta e o pedido de decisão ao responsável.",
            "feedbackErrado": "Não é essa a ordem. Primeiro vem o fato, depois a consequência, depois a proposta e por último o pedido de decisão."
          },
          {
            "tipo": "checklist",
            "titulo": "Autoavaliação (não substitui a correção do instrutor)",
            "itens": [
              "Li as orientações da aula",
              "Respondi às perguntas e comparei minhas respostas com as explicações",
              "Se tive uma dúvida, sei o que preciso confirmar com o responsável"
            ]
          }
        ]
      },
      {
        "dia": 3,
        "titulo": "Pedidos, propostas e compromisso com prazos",
        "subtitulo": "Do combinado com o cliente até o trabalho feito",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Objetivo da aula",
            "texto": "Hoje você vai avaliar uma mudança de prazo. Você olha a capacidade (quanto dá para produzir), o acabamento e os compromissos já assumidos. O foco é administrar. O sistema é um apoio. Use só exemplos inventados e não mude dados reais."
          },
          {
            "tipo": "conteudo",
            "titulo": "Leia o pedido inteiro",
            "texto": "Antes de agir, confira o cliente, o produto, a quantidade, a versão, o prazo, as condições de venda e a situação do pagamento. Faltou algum dado? Procure na fonte e avise sobre a dúvida."
          },
          {
            "tipo": "conteudo",
            "titulo": "O Kanban mostra a realidade",
            "texto": "O Kanban é o quadro das etapas dos pedidos. A etapa marcada tem que ser a etapa real. Mover um cartão só para parecer que avançou esconde o problema e atrapalha as decisões."
          },
          {
            "tipo": "conteudo",
            "titulo": "Exemplo resolvido: prazo de entrega",
            "texto": "O cliente pede a entrega dois dias antes. A atendente olha as tarefas em andamento e consulta o responsável pela produção. Ela só informa uma nova data se houver confirmação."
          },
          {
            "tipo": "conteudo",
            "titulo": "Toda mudança tem consequência",
            "texto": "Trocar quantidade, material ou prazo mexe na produção e no orçamento. Não confirme novas condições ao cliente sem ver a capacidade e combinar com a equipe."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "disciplina",
            "pergunta": "O cliente pede para adiantar o prazo. Qual é a atitude certa?",
            "opcoes": [
              "Confirmar a nova data com base no prazo médio de pedidos antigos",
              "Consultar a capacidade e os responsáveis antes de confirmar",
              "Confirmar a data se houver impressora livre, sem ver o acabamento"
            ],
            "correta": 1,
            "feedbackCerto": "Isso mesmo. Prazo é compromisso, não é palpite.",
            "feedbackErrado": "Não é isso. Volte ao exemplo do prazo de entrega e veja o que a atendente fez antes de informar a nova data."
          },
          {
            "tipo": "multipla_escolha",
            "pergunta": "Em um pedido inventado, o cliente pede a entrega dois dias antes. O que você confere antes de responder?",
            "opcoes": [
              "O prazo combinado, as tarefas em andamento, o acabamento e a capacidade, junto com o responsável",
              "Só se há uma impressora livre naquele dia",
              "Só o prazo médio dos pedidos antigos",
              "Nada. Você confirma a data e avisa a produção depois"
            ],
            "correta": 0,
            "feedbackCerto": "Isso mesmo. Você confere os dados com o responsável e só promete a nova data depois da confirmação.",
            "feedbackErrado": "Não é isso. Confira o prazo combinado, as tarefas em andamento, o acabamento e a capacidade com o responsável. Não prometa a data antes da confirmação."
          },
          {
            "tipo": "checklist",
            "titulo": "Autoavaliação (não substitui a correção do instrutor)",
            "itens": [
              "Li as orientações da aula",
              "Respondi às perguntas e comparei minhas respostas com as explicações",
              "Se tive uma dúvida, sei o que preciso confirmar com o responsável"
            ]
          }
        ]
      },
      {
        "dia": 4,
        "titulo": "Estoque, produção e ação imediata",
        "subtitulo": "Achar a falha antes que ela vire prejuízo",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Objetivo da aula",
            "texto": "Hoje você vai aprender a comparar o material que existe com o material necessário. Vai aprender também a avisar sobre uma diferença antes que ela cause retrabalho. O foco é administrar. O sistema é um apoio. Use só exemplos inventados e não mude dados reais."
          },
          {
            "tipo": "conteudo",
            "titulo": "Estoque não é só quantidade",
            "texto": "Confira o material, a unidade, quanto está disponível, quanto vai ser gasto e o prazo para repor. Uma contagem sozinha pode esconder material já reservado para outros pedidos."
          },
          {
            "tipo": "conteudo",
            "titulo": "Agir na hora",
            "texto": "Se você notar diferença entre o pedido, a peça e o sistema, pare só a atividade que é sua, quando for preciso para evitar dano. Avise o responsável na hora e registre o que aconteceu."
          },
          {
            "tipo": "conteudo",
            "titulo": "Exemplo resolvido: diferença na tarefa",
            "texto": "A tarefa pede 15 cm e a peça mede 13 cm. A responsável separa a peça para ela não seguir adiante. Depois confere o pedido original e avisa da diferença na hora. Ela não altera a tarefa por conta própria."
          },
          {
            "tipo": "conteudo",
            "titulo": "Investigar antes de culpar",
            "texto": "Acúmulo em Pintura pode ser gargalo real (etapa sobrecarregada) ou cartão desatualizado. Compare Kanban, tarefa e situação real antes de propor redistribuir o trabalho."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "intervencao",
            "pergunta": "Você vê uma peça com medida diferente da tarefa. O que você faz?",
            "opcoes": [
              "Registra a diferença e continua até a próxima conferência",
              "Avisa na hora, não deixa a peça seguir e confirma a medida certa com o responsável",
              "Pede nova impressão antes de confirmar qual é a medida certa"
            ],
            "correta": 1,
            "feedbackCerto": "Isso mesmo. Agir cedo reduz retrabalho e custo. A correção precisa ser autorizada.",
            "feedbackErrado": "Não é isso. Volte ao exemplo da peça de 13 cm e veja o que a responsável fez ao notar a diferença."
          },
          {
            "tipo": "multipla_escolha",
            "pergunta": "Uma peça inventada mede 13 cm e a tarefa pede 15 cm. Qual é o aviso certo ao responsável e o próximo passo seguro?",
            "opcoes": [
              "Não avisar e mudar a tarefa para 13 cm",
              "Avisar que a peça saiu errada e já pedir nova impressão",
              "Avisar só na próxima conferência e deixar a peça seguir",
              "Avisar que a peça mede 13 cm e a tarefa pede 15 cm, separar a peça e esperar a decisão"
            ],
            "correta": 3,
            "feedbackCerto": "Isso mesmo. Você informa as duas medidas, não deixa a peça seguir e pede a decisão antes de alterar a tarefa ou imprimir de novo.",
            "feedbackErrado": "Não é isso. Informe a medida da peça e a medida da tarefa, separe a peça e peça a decisão do responsável antes de alterar a tarefa ou imprimir de novo."
          },
          {
            "tipo": "checklist",
            "titulo": "Autoavaliação (não substitui a correção do instrutor)",
            "itens": [
              "Li as orientações da aula",
              "Respondi às perguntas e comparei minhas respostas com as explicações",
              "Se tive uma dúvida, sei o que preciso confirmar com o responsável"
            ]
          }
        ]
      },
      {
        "dia": 5,
        "titulo": "Caixa, custos e responsabilidade pelos resultados",
        "subtitulo": "Separar receita, custo e resultado",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Objetivo da aula",
            "texto": "Hoje você vai separar receita (o dinheiro das vendas) de resultado (o que sobra). Vai fazer uma conta estimada e dizer quais custos ainda faltam. O foco é administrar. O sistema é um apoio. Use só exemplos inventados e não mude dados reais."
          },
          {
            "tipo": "conteudo",
            "titulo": "Receita não é lucro",
            "texto": "Se você vende 10 peças a R$ 70, a receita é R$ 700. Para estimar o resultado, desconte os custos e as despesas que fazem parte da venda, inclusive taxas e tributos (impostos)."
          },
          {
            "tipo": "conteudo",
            "titulo": "Antes de registrar",
            "texto": "Confirme a data, a categoria, o valor, o comprovante e o responsável. Nunca lance números inventados no caixa real para treinar. Tem dúvida sobre a categoria? Tire a dúvida antes de registrar."
          },
          {
            "tipo": "conteudo",
            "titulo": "Exemplo resolvido: resultado estimado",
            "texto": "A receita é R$ 700. Tire R$ 100 de materiais e R$ 350 de outros custos e despesas. Sobram R$ 250. Isso vale se não houver mais nada para descontar neste exemplo."
          },
          {
            "tipo": "conteudo",
            "titulo": "Ser responsável é conferir",
            "texto": "Não saber faz parte de aprender. O certo é perguntar, pesquisar e confirmar antes de uma ação que possa dar prejuízo. Erro encontrado deve ser avisado, não escondido."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "responsabilidade",
            "pergunta": "Uma venda de R$ 700 teve R$ 100 de custos de materiais e R$ 350 de outros custos e despesas. Qual é o resultado neste exemplo?",
            "opcoes": [
              "R$ 700",
              "R$ 600",
              "R$ 250"
            ],
            "correta": 2,
            "feedbackCerto": "Isso mesmo. 700 - 100 - 350 = R$ 250, antes de qualquer outro item que não esteja no exemplo.",
            "feedbackErrado": "Não é isso. Volte ao exemplo resolvido e refaça a conta: receita menos materiais menos outros custos e despesas."
          },
          {
            "tipo": "multipla_escolha",
            "pergunta": "Você vende 12 miniaturas a R$ 55 cada. Qual é a receita, e esse valor já mostra o lucro?",
            "opcoes": [
              "R$ 660, e esse valor já é o lucro",
              "R$ 660, mas ainda falta descontar os custos e as despesas",
              "R$ 600, mas ainda falta descontar os custos e as despesas",
              "R$ 67, e esse valor já é o lucro"
            ],
            "correta": 1,
            "feedbackCerto": "Isso mesmo. 12 x 55 = R$ 660 de receita. Para saber o lucro, falta descontar materiais, trabalho, embalagem, taxas, tributos e outros custos e despesas.",
            "feedbackErrado": "Não é isso. 12 x 55 = R$ 660 de receita. E receita não é lucro, porque ainda falta descontar os custos e as despesas."
          },
          {
            "tipo": "checklist",
            "titulo": "Autoavaliação (não substitui a correção do instrutor)",
            "itens": [
              "Li as orientações da aula",
              "Respondi às perguntas e comparei minhas respostas com as explicações",
              "Se tive uma dúvida, sei o que preciso confirmar com o responsável"
            ]
          }
        ]
      },
      {
        "dia": 6,
        "titulo": "Visão do todo, vendas pela internet e antecipação",
        "subtitulo": "Preparar decisões com dados confiáveis",
        "etapas": [
          {
            "tipo": "conteudo",
            "titulo": "Objetivo da aula",
            "texto": "Hoje você vai aprender a prever os riscos de uma venda e a explicar uma decisão com custos, prazo e dados que falta confirmar. O foco é administrar. O sistema é um apoio. Use só exemplos inventados e não mude dados reais."
          },
          {
            "tipo": "conteudo",
            "titulo": "Marketplace não é só vitrine",
            "texto": "Marketplace é um site de vendas, como Shopee, Mercado Livre ou Elo7. Antes de cadastrar um produto, avalie comissão atual, frete, embalagem, tributos, devoluções, prazo e margem (o que sobra). As taxas mudam. Confira sempre as regras atuais."
          },
          {
            "tipo": "conteudo",
            "titulo": "Olhar para frente",
            "texto": "Uma gestora olha os pedidos perto de vencer, os estoques no limite, os atrasos, os pagamentos pendentes e as etapas congestionadas. Veja o risco antes que ele vire prejuízo."
          },
          {
            "tipo": "conteudo",
            "titulo": "Exemplo resolvido: revisão de anúncio",
            "texto": "Antes de anunciar uma miniatura, a gestora consulta a tabela atual de tarifas do site. Depois calcula o custo total por pedido e vê se o preço cobre os custos e a margem desejada."
          },
          {
            "tipo": "conteudo",
            "titulo": "Fechamento do ciclo",
            "texto": "Comunique o problema de forma direta. Mostre as opções. Combine a decisão. Faça o que foi autorizado. Acompanhe e registre o resultado."
          },
          {
            "tipo": "multipla_escolha",
            "competencia": "antecipacao",
            "pergunta": "A comissão de um site de vendas mudou. O que fazer antes de anunciar?",
            "opcoes": [
              "Usar a taxa do anúncio anterior, se o produto for parecido",
              "Ver a taxa atual, refazer a conta da margem e combinar o preço",
              "Manter o preço antigo e rever só depois da primeira venda"
            ],
            "correta": 1,
            "feedbackCerto": "Isso mesmo. Decisão de venda pede dados atuais e conta feita antes do compromisso.",
            "feedbackErrado": "Não é isso. Volte ao exemplo da revisão de anúncio e veja o que a gestora consulta e calcula antes de anunciar."
          },
          {
            "tipo": "multipla_escolha",
            "pergunta": "Você planeja um anúncio inventado de miniatura. O que precisa estar feito antes de publicar?",
            "opcoes": [
              "Só escolher o preço, porque os custos aparecem depois da venda",
              "Só copiar as taxas de um anúncio antigo parecido",
              "Listar os custos conhecidos e os que falta confirmar, ver prazo e capacidade e pedir aprovação do preço"
            ],
            "correta": 2,
            "feedbackCerto": "Isso mesmo. Você considera material, embalagem, frete, taxas atuais, tributos e devoluções. Vê prazo e capacidade e combina o preço antes de publicar.",
            "feedbackErrado": "Não é isso. Antes de publicar, liste os custos conhecidos e os que falta confirmar, veja prazo e capacidade e peça a aprovação do preço."
          },
          {
            "tipo": "checklist",
            "titulo": "Autoavaliação (não substitui a correção do instrutor)",
            "itens": [
              "Li as orientações da aula",
              "Respondi às perguntas e comparei minhas respostas com as explicações",
              "Se tive uma dúvida, sei o que preciso confirmar com o responsável"
            ]
          }
        ]
      }
    ]
  }
};

// Rótulos das competências dos cursos novos (usados na tela de resultado).
var TREIN_COMPETENCIA_NOME_EXTRA = {
  "visao_processo": "Visão do processo",
  "fluxo_kanban": "Fluxo e Kanban",
  "uso_valente_os": "Uso do Valente OS",
  "informacao_completa": "Informação completa",
  "responsabilidade": "Responsabilidade",
  "seguranca_qualidade": "Qualidade e segurança",
  "organizacao_trabalho": "Organização do trabalho de modelagem",
  "leitura_briefing": "Leitura de briefing e referências",
  "escala_medidas": "Escala e medidas",
  "modelagem_fabricacao": "Modelagem para fabricação",
  "organizacao_versoes": "Arquivos e versões",
  "versionamento": "Correções e controle de versão",
  "conferencia_liberacao": "Conferência e liberação",
  "entrega_producao": "Entrega para a produção",
  "estacao_seguranca": "Estação e segurança",
  "leitura_ot": "Leitura da OT",
  "processos_fatiamento": "Processos e fatiamento",
  "preparo_acompanhamento": "Preparo e acompanhamento",
  "inspecao_falhas": "Inspeção e falhas",
  "liberacao_pos": "Liberação para pós-impressão",
  "organizacao_bancada": "Organização da bancada",
  "conferencia_recebimento": "Conferência de recebimento",
  "seguranca_resina": "Segurança com resina",
  "remocao_suportes": "Remoção de suportes",
  "acabamento_superficie": "Acabamento de superfície",
  "qualidade_entrega": "Qualidade e entrega",
  "preparacao_estacao": "Estação de pintura",
  "leitura_pedido": "Leitura do pedido",
  "preparacao_superficie": "Preparação da superfície",
  "fidelidade_cor": "Fidelidade à cor",
  "tecnica_pintura": "Técnicas de pintura",
  "inspecao_liberacao": "Inspeção e liberação",
  "conferencia_pedido": "Conferência do pedido",
  "conferencia_final": "Conferência final",
  "embalagem_protecao": "Embalagem e proteção",
  "identificacao_envio": "Identificação do pacote",
  "dados_envio": "Dados de envio",
  "despacho_kanban": "Despacho e Kanban",
  "leitura_kanban": "Leitura do Kanban",
  "priorizacao": "Priorização",
  "capacidade_fluxo": "Capacidade e fluxo",
  "gargalos": "Gargalos",
  "qualidade_melhoria": "Qualidade e melhoria",
  "distribuicao_trabalho": "Distribuição de trabalho",
  "seguranca_produto": "Segurança do produto",
  "decisao_conjunta": "Decisão conjunta",
  "disciplina": "Disciplina e acordos",
  "intervencao": "Intervenção imediata",
  "antecipacao": "Antecipação"
};
