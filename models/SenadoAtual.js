const mongoose = require('mongoose');

const { Schema } = mongoose;

const senadoAtualSchema = new Schema({
  IdentificacaoParlamentar: {
    CodigoParlamentar: Number,
    CodigoPublicoNaLegAtual: Number,
    NomeParlamentar: String,
    NomeCompletoParlamentar: String,
    SexoParlamentar: String,
    FormaTratamento: String,
    UrlFotoParlamentar: String,
    UrlPaginaParlamentar: String,
    EmailParlamentar: String,
    SiglaPartidoParlamentar: String,
    UfParlamentar: String,
  },
  Mandato: {
    CodigoMandato: Number,
    UfParlamentar: String,
    PrimeiraLegislaturaDoMandato: {
      NumeroLegislatura: Number,
      DataInicio: Date,
      DataFim: Date,
    },
    SegundaLegislaturaDoMandato: {
      NumeroLegislatura: Number,
      DataInicio: Date,
      DataFim: Date,
    },
    DescricaoParticipacao: String,
    Suplentes: {
      Suplente: [
        {
          DescricaoParticipacao: String,
          CodigoParlamentar: Number,
          NomeParlamentar: String,
        },
        {
          DescricaoParticipacao: String,
          CodigoParlamentar: Number,
          NomeParlamentar: String,
        },
      ],
    },
    Exercicios: {
      Exercicio: [
        {
          CodigoExercicio: Number,
          DataInicio: Date,
        },
      ],
    },
  },
  UrlGlossario: String,
});

const SenadoAtual = mongoose.model('SenadoAtuai', senadoAtualSchema);

module.exports = SenadoAtual;
