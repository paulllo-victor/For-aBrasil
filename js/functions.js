/*
 * Autor: Jefferson Ricardo / Paulo Victor
 * Versão: 1.0
 * Data de crialçao: 07/07/2020 18:56hs
 * Referência: PAGINAS DE AÇÕES EM JQUEY (JS)
 * Conteúdo: Geral
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Facebook: https://www.facebook.com/jeffersonrmsilva
 * Celular: 81 99668-0318
 *
 * Facebook: https://www.facebook.com/profile.php?id=100004332602666
 * Celular: 81 98657-8987
*/
// EFEITO CARREGAMENTO
$(window).on('load',function(){
	$('.carregamento-page').hide();
});
/***/
// MENU FIXO
$(function(){
	$(window).scroll(function(){
		var windowOffy = $(window).scrollTop();

		if(windowOffy >= 50){
			$('header').addClass('fixedTop');
			$('header').fadeIn();
		}else{			
			$('header').removeClass('fixedTop');
			$('header').fadeIn();
		}
	})
})
$(function(){
	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;
		$('html,body').animate({
			'scrollTop':offSetTop
		})
		return false;
	})
})
///************///
/*MASCARAS CAMPOS*/
$(function(){
	/*FORMATACAO CAMPO TELEFONE*/
	var SPMaskBehavior = function (val) {
	  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
	},
	spOptions = {
	  onKeyPress: function(val, e, field, options) {
	      field.mask(SPMaskBehavior.apply({}, arguments), options);
	    }
	};

	$('.telefone').mask(SPMaskBehavior, spOptions);
	/*FIM FORMATACAO TELEFONE*/

	/*FORMTAÇÃO CPF/CNPJ*/
	var CpfCnpjMaskBehavior = function (val) {
			return val.replace(/\D/g, '').length <= 11 ? '000.000.000-009' : '00.000.000/0000-00';
		},
    cpfCnpjpOptions = {
    	onKeyPress: function(val, e, field, options) {
      	field.mask(CpfCnpjMaskBehavior.apply({}, arguments), options);
      }
    };

	$('.cpf').mask(CpfCnpjMaskBehavior, cpfCnpjpOptions);
	/*FIM FORMTAÇÃO CPF/CNPJ*/
	/*FORMATACAO DATA*/
	$('.date').mask('00/00/0000');
	/*FIM FORMATACAO DATA*/
	/*FORMATACAO CEP*/
	$('.cep').mask('00000-000');
	/*FORMATACAO CEP*/
	$('.money').mask('000.000.000.000.000,00', {reverse: true});
	/*FIM FORMATACAO CEP*/
	/*CAMPOS FORMATACAO APENAS NUMERO */
	$('.soNumero').mask('000000000000000000000000', {reverse: true});
	/*FIM CAMPOS FORMATACAO APENAS NUMERO */
})
/***/