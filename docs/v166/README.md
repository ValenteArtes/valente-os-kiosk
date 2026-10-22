# Valente OS Terminal — capacitação integrada v166

Revisão do projeto que gerou o `p17.apk`, mantendo o terminal, a ponte de rede, a inicialização automática e as oito trilhas existentes. Acrescenta a Academia revisada, voz nativa do Android, registro de tentativas e reforço por assunto.

O projeto está preparado para gerar **p18.apk**, versão 1.66, código 166. O APK assinado ainda precisa ser compilado pelo GitHub Actions com o segredo já existente. Não há chave privada neste pacote.

## Positivo — atualizar pelo APK

1. Aplicar os arquivos deste projeto ao repositório `ValenteArtes/valente-os-kiosk`, preservando `KEYSTORE_B64`.
2. Executar **Actions → Build APK**. O fluxo confere a assinatura contra o certificado do p17 e interrompe se a chave estiver ausente ou for diferente.
3. Baixar o artefato **ValenteOS-Terminal-p18**, contendo `p18.apk`.
4. Colocar o arquivo no mesmo servidor de instalação e abrir `http://192.168.1.5:8000/p18.apk` em um Positivo para homologação.
5. Conferir PIN, trabalho, capacitação, retomada e voz antes de distribuir aos demais aparelhos. Não é necessário desinstalar quando a assinatura corresponde à instalada.

O aplicativo usa `TextToSpeech` do Android, não a voz do navegador. É necessário que o tablet tenha um motor de voz e suporte ao português. Se faltar, a aula avisa e continua por texto. Ao retomar uma leitura pausada, o trecho interrompido começa novamente; o Android antigo não oferece pausa por palavra.

## Samsung — manter “Atualizar telas”

Foi preparado HTML autocontido em `telas-servidor`, com todos os scripts de capacitação incorporados. `Samsung_ValenteOS_Terminal.html` conserva o sinalizador `EXTRAS=true` previsto no terminal para Samsung; a variante `ValenteOS_Terminal.html` mantém `EXTRAS=false`, como no p17.

O comando nativo **Admin → Atualizar telas** não está no projeto recebido. Portanto, seu endereço de download e o comportamento de cache ainda precisam ser confirmados no APK específico do Samsung antes de publicar essas telas. Nenhum servidor foi modificado. O HTML pode usar a voz do navegador ou a nova ponte nativa quando existir; atualizar somente o HTML não adiciona uma ponte Java a um APK antigo.

O usuário informou que o Samsung possui outra assinatura. Não usar o APK dos Positivo como atualização por cima desse aplicativo. O caminho por telas permanece separado.

## Progresso e permissões

- O treinamento usa o colaborador identificado no terminal e grava em `treinamento_progresso`, com colaborador, trilha, versão e aula. Não é um caderno local separado.
- A Academia acrescentada mantém versão de conteúdo 3, como na revisão web anterior. Os índices das suas etapas não foram alterados.
- Primeira tentativa e erro crítico são preservados; reforço fica em `respostas[etapa].reforco`.
- Textos, missões e checklists registram realização, sem aprovação automática de domínio.
- Resultado teórico não autoriza trabalho operacional. As políticas do servidor não foram alteradas.

## Validação

Os quatro arquivos Java compilaram com Android SDK 34, Java 8 e as dependências do projeto. Houve avisos de APIs antigas, necessários à compatibilidade; não houve erro. Isso não substitui o empacotamento completo por Gradle nem um teste físico.

31 verificações passaram em Chromium real com voz Android e banco simulados. Foram construídas as interfaces das 601 etapas, verificadas a revisão isolada, as tentativas, os rascunhos, as falhas de gravação, a saída durante gravação e a separação entre reforço e primeira tentativa. Nenhum tablet ou banco de produção foi acessado.

Consulte `resultado-testes-v166.json`, `validacao-java.json` e `verificacao-p17.json`. O relatório de compilação com avisos está em `validacao-java.txt`.

## Arquivos relevantes

- `LessonVoice.java`: ponte para a voz do Android e controle do ciclo de vida.
- `MainActivity.java`: registro da ponte e proteção das chamadas de WebView posteriores ao Android 4.0.
- `treino-apoio-es5.js`: leitura por trechos e apoio pedagógico.
- `treino-engine-es5.js`: motor compatível com os tablets, com as correções integradas.
- `.github/workflows/build.yml`: uso da chave existente e conferência do certificado.
- `telas-servidor`: variantes autocontidas para homologar mecanismos de atualização de telas.

Referências técnicas: [TextToSpeech do Android](https://developer.android.com/reference/android/speech/tts/TextToSpeech) e [WebView](https://developer.android.com/reference/android/webkit/WebView).
