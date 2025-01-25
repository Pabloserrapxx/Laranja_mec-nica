# **2. Levantamento de Requisitos**

2.1-Tabela de Requisitos Funcionais (RFs)

| ID   | Requisito Funcional                                                                                                          |
| ---- | -------------------------------------------------------------------------------------------------------------------------- |
| RF01 | O sistema deve permitir que vendedores cadastrem produtos de diversas categorias.                                              |
| RF02 | Deve permitir organizar produtos por categorias e subcategorias (ex.: Eletrônicos > Smartphones).                                |
| RF03 | O sistema deve oferecer filtros avançados (ex.: faixa de preço, avaliações, localização do vendedor, etc.).                   |
| RF04 | Permitir pesquisa textual com sugestões automáticas e correções ortográficas.                                                   |
| RF05 | O sistema deve ser integrado a APIs de fornecedores externos para ampliar a base de produtos.                                  |
| RF06 | O sistema deve informar a disponibilidade de produtos com base na localização do usuário.                                       |
| RF07 | Oferecer estimativa de prazos de entrega de acordo com a localização do comprador e o método de envio.                       |
| RF08 | O usuário deve poder adicionar produtos ao carrinho de compras.                                                                 |
| RF09 | Deve haver suporte a listas de desejos para produtos de interesse.                                                            |
| RF10 | O sistema deve permitir que usuários avaliem e comentem produtos comprados.                                                     |
| RF11 | Implementar um algoritmo de recomendação baseado no histórico de compras e navegação do usuário.                             |
| RF12 | Deve existir um canal de comunicação para que os usuários entrem em contato com vendedores ou com o suporte da plataforma.    |
| RF13 | O sistema deve informar a disponibilidade de produtos com base na localização do usuário. |
| RF14 | Oferecer estimativa de prazos de entrega de acordo com a localização do comprador e o método de envio.  |
| RF15 | O sistema deve permitir que vendedores criem contas e cadastrem suas lojas virtuais.                                           |
| RF16 | Deve ser possível personalizar a página da loja com logotipo, descrição, banners e informações de contato.                       |
| RF17 | O sistema deve permitir que vendedores adicionem, editem e removam produtos com descrições, fotos e vídeos.                    |
| RF18 | Oferecer suporte para definir estoque, variações (ex.: cor, tamanho) e preços promocionais.                                    |
| RF19 | O sistema deve permitir que compradores sigam lojas e recebam notificações sobre novos produtos ou promoções.                   |
| RF20 | Implementar um sistema de mensagens diretas para que compradores possam tirar dúvidas diretamente com os vendedores.         |
| RF21 | O sistema deve permitir a exibição dos produtos em categorias gerais e em uma página dedicada à loja do vendedor.                |
| RF22 | Produtos de pequenos vendedores devem ser destacados em seções específicas (ex.: “Feito à mão” ou “Pequenos negócios”).         |
| RF23 | Deve ser possível configurar taxas ou comissões sobre vendas realizadas na plataforma.                                        |
| RF24 | Compradores devem poder avaliar vendedores e produtos com notas e comentários.                                               |
| RF25 | O sistema deve exibir a reputação do vendedor com base nas avaliações recebidas.                                             |
| RF26 | O sistema deve permitir que vendedores criem cupons de desconto e promoções exclusivas.                                      |
| RF27 | Implementar uma funcionalidade para destacar produtos por tempo limitado em seções promocionais (ex.: “Destaques do dia”).    |
| RF28 | Oferecer tutoriais e guias para ajudar vendedores a configurar suas lojas e maximizar suas vendas.                             |
| RF29 | Implementar um canal de suporte técnico para resolução de problemas.                                                          |
| RF30 | O sistema deve oferecer integração com serviços de entrega para cálculo automático de frete e rastreamento de pedidos.          |
| RF31 | Deve ser possível que vendedores definam opções de envio personalizado (ex.: retirada em loja, entrega local).             |
| RF32 | O sistema deve integrar uma plataforma de pagamento confiável que suporte cartões de crédito, débito, Pix, PayPal e outras formas de pagamento populares. |
| RF33 | Todas as transações devem ser processadas em um ambiente seguro com criptografia. |
| RF34 | O sistema deve exigir autenticação em duas etapas (2FA) para vendedores e compradores em ações críticas, como alterações de conta ou grandes transações. |
| RF35 | Implementar validação de identidade para vendedores (ex.: envio de documentos e comprovação de endereço). |
| RF36 | O sistema deve monitorar todas as transações em tempo real para detectar comportamentos suspeitos ou padrões de fraude. |
| RF37 | Implementar mecanismos automáticos para bloquear transações consideradas fraudulentas. |
| RF38 | O sistema deve reter o pagamento do comprador até que o vendedor confirme o envio e o comprador receba o produto (ex.: sistema de escrow). |
| RF39 | Notificar ambas as partes (comprador e vendedor) sobre o status das transações. |
| RF40 | O sistema deve oferecer uma funcionalidade para abertura de disputas em casos de problemas com produtos ou pagamentos. |
| RF41 | Deve permitir o processamento de reembolsos de forma parcial ou total com base na resolução da disputa. |
| RF42 | Os dados de pagamento (como números de cartões) não devem ser armazenados diretamente no sistema, mas repassados para provedores de pagamento seguros. |
| RF43 | Informações pessoais, como endereços e dados bancários, devem ser criptografadas no banco de dados. |
| RF44 | O sistema deve registrar todas as transações realizadas por compradores e vendedores e torná-las acessíveis em uma área segura da conta. |
| RF45 | O sistema deve alertar usuários em casos de acesso a partir de dispositivos ou locais suspeitos. |
| RF46 | O sistema deve calcular automaticamente os custos de entrega com base na localização do comprador, peso e dimensões do produto. |
| RF47 | Deve exibir prazos estimados de entrega para cada método de envio disponível. |
| RF48 | O sistema deve integrar-se com múltiplas transportadoras para oferecer opções de entrega variadas (ex.: padrão, expresso). |
| RF49 | Deve permitir o rastreamento de entregas em tempo real por meio de APIs fornecidas pelas transportadoras. |
| RF50 | O sistema deve sugerir rotas de entrega otimizadas para reduzir custos e tempo de transporte. |
| RF51 | Deve agrupar pedidos de uma mesma região para economizar em transporte e melhorar a eficiência. |
| RF52 | O sistema deve gerenciar estoques em múltiplos centros de distribuição para reduzir o tempo de entrega. |
| RF53 | Deve sugerir o centro de distribuição mais próximo ao comprador para envio do pedido. |
| RF54 | Enviar notificações automáticas ao cliente sobre o status da entrega (ex.: "pedido enviado", "pedido a caminho", "pedido entregue"). |
| RF55 | Notificar compradores em casos de atrasos ou problemas logísticos. |
| RF56 | Permitir que o cliente solicite devoluções ou trocas, incluindo geração de etiquetas de devolução de forma automática. |
| RF57 | Implementar logística reversa eficiente para lidar com devoluções e trocas de produtos, minimizando custos para a plataforma. |
| RF58 | Oferecer suporte para entrega em áreas remotas ou com acesso limitado, por meio de parcerias com transportadoras locais ou serviços alternativos. |
| RF59 | Exibir ao cliente um mapa com a localização em tempo real do produto durante o transporte. |
| RF60 | Permitir pagamento por boletos bancários. |
| RF61 | Oferecer parcelamento de compras sem a necessidade de cartão de crédito, através de financiamentos internos ou parcerias com fintechs. |
| RF62 | Disponibilizar pagamento por transferência bancária, incluindo PIX (ou equivalente). |
| RF63 | Aceitar pagamentos por carteiras digitais, como PayPal, Mercado Pago ou outras plataformas locais. |
| RF64 | Oferecer pagamento por débito automático vinculado a contas bancárias. |
| RF65 | Suportar métodos de pagamento regionais específicos de cada país ou área (ex.: OXXO no México, PagSeguro no Brasil). |
| RF66 | Permitir que clientes realizem pagamentos em lojas físicas ou agências parceiras. |
| RF67 | Gerar códigos de barras ou QR codes que possam ser pagos em correspondentes bancários ou lotéricas. |
| RF68 | Permitir que os clientes escolham o número de parcelas (dentro de limites pré-definidos). |
| RF69 | Oferecer condições promocionais de parcelamento sem juros para compras acima de um valor específico. |
| RF70 | Implementar um sistema que notifique automaticamente o cliente sobre boletos vencidos ou parcelas pendentes. |
| RF71 | Exibir uma calculadora de pagamentos que simule valores de parcelas, taxas de juros e prazos. |
| RF72 | Permitir pagamentos recorrentes para compras como assinaturas ou planos parcelados. |
| RF73 | Garantir que o cliente possa solicitar reembolsos ou estornos de maneira simples e transparente. |
| RF74 | Implementar uma interface limpa e minimalista com foco em usabilidade. |
| RF75 | Disponibilizar menus claros e organizados por categorias de produtos e funcionalidades. |
| RF76 | Fornecer uma barra de busca com sugestões automáticas enquanto o usuário digita. |
| RF77 | Permitir personalização do idioma e moeda de exibição. |
| RF78 | Exibir tutoriais interativos para novos usuários, explicando como navegar e realizar ações básicas. |
| RF79 | Oferecer suporte a leitores de tela para usuários com deficiência visual. |
| RF80 | Implementar atalhos de teclado para navegação mais rápida. |
| RF81 | Permitir ajuste de contraste e tamanho de fonte para pessoas com dificuldades de visão. |
| RF82 | Garantir que todos os botões e links sejam acessíveis por dispositivos móveis e touchscreens. |
| RF83 | Criar um processo de cadastro rápido e direto, com a opção de login por redes sociais ou contas já existentes. |
| RF84 | Oferecer um guia inicial para compradores e vendedores, destacando as principais funcionalidades. |
| RF85 | Disponibilizar um FAQ abrangente com respostas às dúvidas mais comuns. |
| RF86 | Implementar um chatbot ou assistente virtual para suporte imediato. |
| RF87 | Oferecer acesso fácil a canais de atendimento, como e-mail, telefone ou chat ao vivo. |
| RF88 | Garantir que a interface seja compatível com todos os tamanhos de tela, incluindo dispositivos móveis, tablets e desktops. |
| RF89 | Incluir um sistema de avaliação para que os usuários possam reportar problemas de usabilidade ou sugerir melhorias. |
| RF90 | Permitir que os usuários classifiquem a experiência de compra ou venda após utilizarem a plataforma. |
| RF91 | Implementar notificações úteis e não intrusivas, como atualizações de pedidos e promoções, sem sobrecarregar o usuário. |

2.2 - Tabela de Requisitos Não Funcionais (RNFs)

| ID    | Requisito Não Funcional                                                                                                  |
| ----- | ------------------------------------------------------------------------------------------------------------------------ |
| RNF01 | O sistema deve responder às solicitações do usuário em até 2 segundos para pesquisas e carregamento de páginas.           |
| RNF02 | A plataforma deve suportar um grande número de acessos simultâneos (ex.: 1 milhão de usuários ativos, sendo compradores ou vendedores). |
| RNF03 | A interface do usuário deve ser responsiva e funcionar bem em dispositivos móveis e desktops.                              |
| RNF04 | O sistema deve fornecer um design intuitivo com guias visuais para facilitar o uso por diferentes personas.                 |
| RNF05 | O tempo para gerar opções de frete e prazos deve ser inferior a 2 segundos para uma boa experiência do usuário.            |
| RNF06 | O processamento de transações deve ser realizado em menos de 2 segundos para garantir uma boa experiência do usuário.        |
| RNF07 | Garantir que todas as páginas carreguem em menos de 2 segundos em conexões comuns (4G ou Wi-Fi).                           |
| RNF08 | Minimizar o uso de recursos do dispositivo para evitar travamentos ou lentidão, especialmente em dispositivos mais antigos.  |
| RNF09 | O sistema deve funcionar 24/7 sem interrupções perceptíveis para o usuário.                                                  |
| RNF10 | Garantir que os métodos de pagamento estejam disponíveis 99,9% do tempo para evitar falhas.                                 |
| RNF11 | Garantir que o cálculo de frete e prazos seja preciso, mesmo com variações sazonais ou problemas externos.                |
| RNF12 | O sistema deve garantir que 100% das transações sejam concluídas ou estornadas em caso de falha.                         |
| RNF13 | Deve haver backups diários das informações financeiras e transacionais.                                                   |
| RNF14 | Todas as transações devem ser processadas em um ambiente seguro com criptografia.                                         |
| RNF15 | O sistema deve exigir autenticação em duas etapas (2FA) para vendedores e compradores em ações críticas, como alterações de conta ou grandes transações. |
| RNF16 | Implementar validação de identidade para vendedores (ex.: envio de documentos e comprovação de endereço).                 |
| RNF17 | O sistema deve monitorar todas as transações em tempo real para detectar comportamentos suspeitos ou padrões de fraude.    |
| RNF18 | Implementar mecanismos automáticos para bloquear transações consideradas fraudulentas.                                     |
| RNF19 | O sistema deve reter o pagamento do comprador até que o vendedor confirme o envio e o comprador receba o produto (ex.: sistema de escrow).   |
| RNF20 | Os dados de pagamento (como números de cartões) não devem ser armazenados diretamente no sistema, mas repassados para provedores de pagamento seguros. |
| RNF21 | Informações pessoais, como endereços e dados bancários, devem ser criptografadas no banco de dados.                           |
| RNF22 | O sistema deve alertar usuários em casos de acesso a partir de dispositivos ou locais suspeitos.                         |
| RNF23 | O sistema deve registrar todas as transações realizadas por compradores e vendedores e torná-las acessíveis em uma área segura da conta. |