import { PastoralCollection } from '../imports/collections/pastoral';

function insertPastoral({ titulo, autor, descricao }) {
  PastoralCollection.insert({
    titulo,
    autor,
    descricao,
    createdAt: new Date(),
  });
}

export function inserirPastoral() {
  insertPastoral({
    titulo: 'A melhor opção de investimento',
    autor: 'Marcos E. Fink',
    descricao: `
      Às vezes, as pessoas me perguntam qual é a melhor opção de investimento. A minha resposta não é a que elas esperam, mas é absolutamente verdadeira e está baseada nos seguintes princípios:
    
      "O Reino dos céus é como um tesouro escondido num campo. Certo homem, tendo-o encontrado, escondeu-o de novo e, então, cheio de alegria, foi, vendeu tudo o que tinha e comprou aquele campo" Mt 13:44.
    
      "Não acumulem para vocês tesouros na terra, onde a traça e a ferrugem destroem, e onde os ladrões arrombam e furtam. as acumulem para vocês tesouros nos céus, onde a traça e a ferrugem não destroem, e onde os ladrões não arrombam nem furtam" Mt 6:19-20.
    
      Os rendimentos desse tipo de investimento são imensuráveis e eternamente garantidos. Mas não é qualquer pessoa que pode investir no "banco" do Reino dos céus. Para investir nesse "banco" também é necessário "abrir uma conta". E para "abrir uma conta", é fundamental primeiramente ter cidadania do Reino.
    
      Você já é cidadão do Reino dos céus? Você já tem "uma conta no banco" do Reino? Você conhece o "gerente" desse "banco"? E o "banqueiro"? Você já está apto a investir no Reino?
    
      Se a sua resposta a essas perguntas é 'não', você precisa conhecer o Reino urgentemente. Por onde começar? Pegue uma Bíblia e estude o Novo Testamento. Comece lendo o evangelho de Mateus ou o evangelho de João. 
      
      Continue estudando a Bíblia e aprenda tudo o que você precisa saber sobre o Reino, primordialmente sobre o Rei desse Reino. Assim, terá o privilégio de investir no Reino desde já, cheio de alegria.
    
      Se a sua resposta às perguntas acima é 'sim', deixe-me perguntar: Os investimentos que você tem feito têm valor no Reino? Como está o "saldo" da sua "conta de investimentos" do Reino? Continue investindo pesado no Reino, cheio de alegria.
      
      Que o Rei do Reino te conceda oportunidades de investir no que verdadeiramente vale à pena investir.`,
  });
}
