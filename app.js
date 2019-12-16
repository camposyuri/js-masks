$(document).ready(function() {
  $(".mask-tel").inputmask({
    mask: ["(99) 9999-9999", "(99) 99999-9999"],
    keepStatic: true
  });

  $(".mask-cpf-cnpj").inputmask({
    mask: ["999.999.999-99", "99.999.999/9999-99"],
    keepStatic: true
  });

  $(".mask-date").inputmask ({
    mask: ["99/99/9999"]
  });

  $(".mask-money").inputmask('decimal', {
    'alias': 'numeric',
    'groupSeparator': ',',
    'autoGroup': true,
    'digits': 2,
    'radixPoint': ".",
    'digitsOptional': false,
    'allowMinus': false,
    'prefix': 'R$ ',
    'placeholder': ''
  });

  // $(".mask-name").inputmask({
  // });
});
