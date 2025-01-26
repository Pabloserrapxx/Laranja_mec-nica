# Cenários

## Introdução

Os cenários são conhecidos como uma estratégia para a compreensão da interface entre o ambiente e o sistema, bem como um meio de extrair e especificar o comportamento do software descrevendo as situações do ambiente, de acordo com as principais ações realizadas fora do sistema de software. Os cenários também ajudam a esclarecer a inter-relação entre requisitos funcionais e não funcionais.

## Metodologia

A elaboração dos cenários foi realizada a partir da identificação das principais tarefas do aplicativo Mercado Livre, em que cada membro da equipe ficou responsável por um cenário. Os cenários são descritos por:

- título: o título do cenário
- objetivo: o objetivo a ser alcançado pela tarefa
- contexto: descreve a localização geográfica e o estado inicial da tarefa
- recursos: meios de apoio e dispositivos que necessitam estar disponíveis para o cenário
- atores: pessoa que realiza a tarefa descrita no cenário
- episódios: frases que descrevem como o cenário acontece e seu comportamento
- restrição: características que o cenário deve seguir
- exceção: situações que impedem a realização do cenário
<br>


# Cenários

## Cenário 1: Cadastro de Produto pelo Vendedor

| **Objetivo** | Permitir que o vendedor cadastre um novo produto na plataforma. |
|--------------|----------------------------------------------------------------|
| **Contexto** | O vendedor deseja adicionar um novo produto à sua loja virtual no Mercado Livre. |
| **Recursos** | Acesso à conta de vendedor na plataforma. |
| **Atores**   | Vendedor |

### Episódios
1. O vendedor faz login em sua conta no Mercado Livre.
2. Navega até o painel de controle de sua loja.
3. Seleciona a opção "Adicionar novo produto".
4. Preenche as informações do produto, incluindo:
   - Nome do produto
   - Descrição detalhada
   - Categoria e subcategoria (ex.: Eletrônicos > Smartphones)
   - Preço
   - Quantidade em estoque
   - Fotos e vídeos ilustrativos
5. Define as variações do produto, como cor e tamanho, se aplicável.
6. Configura opções de envio e define políticas de frete.
7. Revisa todas as informações inseridas para garantir precisão.
8. Clica em "Publicar produto" para tornar o item disponível na plataforma.

### Restrições
- O sistema deve validar que todos os campos obrigatórios foram preenchidos corretamente.
- Fotos e vídeos devem atender aos formatos e tamanhos suportados pela plataforma.

### Exceções
- Se o vendedor não preencher um campo obrigatório, o sistema deve exibir uma mensagem de erro indicando o campo faltante.
- Caso haja problemas na conexão durante o processo, o sistema deve salvar as informações inseridas e permitir que o vendedor retome o cadastro posteriormente.

---

## Cenário 2: Compra de Produto pelo Comprador

| **Objetivo** | Facilitar a compra de um produto pelo usuário comprador. |
|--------------|---------------------------------------------------------|
| **Contexto** | Um usuário deseja adquirir um produto disponível na plataforma Mercado Livre. |
| **Recursos** | Acesso à conta de comprador na plataforma. |
| **Atores**   | Comprador |

### Episódios
1. O comprador faz login em sua conta no Mercado Livre.
2. Utiliza a barra de busca para encontrar o produto desejado, com sugestões automáticas e correções ortográficas fornecidas pelo sistema.
3. Aplica filtros avançados, como faixa de preço, avaliações e localização do vendedor, para refinar os resultados.
4. Seleciona o produto de interesse na lista de resultados.
5. Revisa as informações detalhadas do produto, incluindo descrições, fotos, avaliações de outros compradores e políticas de envio.
6. Adiciona o produto ao carrinho de compras.
7. No carrinho, verifica os itens selecionados e procede para o checkout.
8. Escolhe o método de envio preferido, com base nas opções e prazos estimados fornecidos pelo sistema.
9. Seleciona a forma de pagamento desejada, como cartão de crédito, débito, Pix ou outras opções disponíveis.
10. Confirma a compra e aguarda a confirmação do pedido.

### Restrições
- O sistema deve garantir que o produto esteja disponível em estoque antes de permitir a compra.
- As opções de envio e pagamento devem ser apresentadas de acordo com a localização do comprador e as configurações do vendedor.

### Exceções
- Se o produto não estiver mais disponível, o sistema deve notificar o comprador e sugerir produtos similares.
- Em caso de falha no processamento do pagamento, o sistema deve informar o comprador e oferecer alternativas ou instruções para resolver o problema.

---

## Cenário 3: Avaliação de Produto pelo Comprador

| **Objetivo** | Permitir que o comprador avalie e comente sobre um produto adquirido. |
|--------------|----------------------------------------------------------------------|
| **Contexto** | Após receber o produto, o comprador deseja compartilhar sua experiência com outros usuários da plataforma. |
| **Recursos** | Acesso à conta de comprador no Mercado Livre. |
| **Atores**   | Comprador |

### Episódios
1. O comprador faz login em sua conta no Mercado Livre.
2. Navega até a seção "Meus pedidos" ou "Compras".
3. Seleciona o pedido correspondente ao produto que deseja avaliar.
4. Clica na opção "Avaliar produto" ou similar.
5. Atribui uma nota ao produto, geralmente em uma escala de 1 a 5 estrelas.
6. Escreve um comentário detalhando sua experiência, destacando pontos positivos e/ou negativos.
7. Opcionalmente, pode adicionar fotos do produto recebido para complementar a avaliação.
8. Submete a avaliação para que fique disponível na página do produto.

### Restrições
- O sistema deve permitir que apenas compradores que efetivamente adquiriram o produto possam avaliá-lo.
- Comentários devem ser moderados para evitar conteúdo inadequado ou ofensivo.

### Exceções
- Se o comprador tentar avaliar um produto que não comprou, o sistema deve impedir a ação e exibir uma mensagem informando que apenas compradores podem avaliar.
- Caso o comentário contenha conteúdo inadequado, deve ser rejeitado pela moderação da plataforma.


## Cenário 4: Atendimento ao Cliente via Chat

| **Objetivo** | Permitir que o comprador ou vendedor resolva dúvidas e problemas com a ajuda do suporte. |
|--------------|---------------------------------------------------------------------------------------|
| **Contexto** | Um usuário, comprador ou vendedor, encontra dificuldades na plataforma e busca ajuda pelo suporte via chat. |
| **Recursos** | Conta ativa na plataforma Mercado Livre. |
| **Atores**   | Comprador, Vendedor, Atendente de Suporte |

### Episódios
1. O usuário faz login em sua conta no Mercado Livre.
2. Navega até a seção de "Ajuda" ou "Suporte ao Cliente".
3. Seleciona a opção "Chat com um atendente".
4. Escolhe o tipo de problema ou dúvida, como:
   - Dúvidas sobre compras
   - Problemas de pagamento
   - Problemas de envio
   - Suporte técnico
5. O sistema conecta o usuário a um atendente ou chatbot para iniciar a interação.
6. O atendente ou chatbot fornece informações ou solicita mais detalhes sobre o problema.
7. O usuário explica sua situação, anexando imagens ou documentos, se necessário.
8. O atendente oferece uma solução ou orienta o usuário sobre os próximos passos.
9. O chat é encerrado após a resolução do problema ou após o direcionamento para outro canal de suporte.

### Restrições
- O chat deve funcionar apenas para usuários logados.
- O sistema deve disponibilizar atendentes humanos em horários pré-definidos; fora desse período, deve oferecer atendimento via chatbot.

### Exceções
- Se não houver atendentes disponíveis, o sistema deve informar o usuário e permitir agendar um atendimento ou encaminhar o problema por e-mail.
- Caso a conexão do usuário caia, o chat deve permitir o retorno à mesma conversa ao reconectar.

---

## Cenário 5: Devolução de Produto pelo Comprador

| **Objetivo** | Facilitar a devolução de um produto que não atendeu às expectativas do comprador. |
|--------------|-----------------------------------------------------------------------------------|
| **Contexto** | Após receber o produto, o comprador deseja devolvê-lo por insatisfação ou defeito. |
| **Recursos** | Conta de comprador na plataforma, pedido de compra confirmado. |
| **Atores**   | Comprador, Vendedor, Sistema de Logística |

### Episódios
1. O comprador faz login em sua conta no Mercado Livre.
2. Navega até a seção "Meus pedidos" ou "Compras".
3. Seleciona o pedido correspondente ao produto que deseja devolver.
4. Clica na opção "Solicitar devolução".
5. Informa o motivo da devolução, escolhendo entre opções predefinidas, como:
   - Produto com defeito
   - Produto não corresponde à descrição
   - Pedido errado
   - Outro motivo
6. O sistema verifica se a devolução está dentro do prazo permitido.
7. O comprador escolhe entre as opções de envio disponíveis para devolver o produto.
8. Recebe as instruções para o envio, como etiqueta de devolução ou agendamento de coleta.
9. O comprador envia o produto e acompanha o status da devolução pelo sistema.

### Restrições
- O sistema deve validar se o prazo de devolução está ativo.
- A devolução só pode ser processada se o produto não tiver sinais de uso inadequado ou danos causados pelo comprador.

### Exceções
- Se o prazo de devolução expirou, o sistema deve informar o comprador e sugerir entrar em contato diretamente com o vendedor.
- Caso o comprador não consiga imprimir a etiqueta, o sistema deve oferecer alternativas, como envio do código pelo celular.

---

## Cenário 6: Promoção de Produtos pelo Vendedor

| **Objetivo** | Permitir que o vendedor crie promoções para aumentar as vendas de seus produtos. |
|--------------|-------------------------------------------------------------------------------|
| **Contexto** | Um vendedor deseja atrair mais clientes criando promoções para determinados produtos na plataforma. |
| **Recursos** | Conta de vendedor ativa na plataforma. |
| **Atores**   | Vendedor, Comprador |

### Episódios
1. O vendedor faz login em sua conta no Mercado Livre.
2. Navega até o painel de controle da loja.
3. Seleciona a opção "Gerenciar promoções".
4. Escolhe o(s) produto(s) que deseja incluir na promoção.
5. Define os detalhes da promoção, como:
   - Percentual ou valor de desconto.
   - Data de início e término da promoção.
   - Regras adicionais, como "Compre 2 e ganhe 1 grátis".
6. Revisa os detalhes e ativa a promoção.
7. O sistema destaca os produtos em promoção para os compradores, como na página inicial ou em buscas relacionadas.
8. O vendedor acompanha o desempenho da promoção através de relatórios no painel de controle.

### Restrições
- O vendedor só pode aplicar descontos em produtos que estejam disponíveis em estoque.
- Promoções não podem ser alteradas após o início, exceto para serem encerradas.

### Exceções
- Se o vendedor tentar aplicar uma promoção em um produto fora de estoque, o sistema deve exibir uma mensagem de erro.
- Caso o vendedor não configure uma data de término, o sistema deve sugerir uma duração padrão para evitar promoções infinitas.
