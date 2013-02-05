(function($) {

  $.fn.konami = function(callback, code) {
    if(code == undefined) code = "38,38,40,40,37,39,37,39,66,65";
    
    return this.each(function() {
      var kkeys = [];
      $(this).keydown(function(e){
        kkeys.push( e.keyCode );
        if ( kkeys.toString().indexOf( code ) >= 0 ){
          $(this).unbind('keydown', arguments.callee);
          callback(e);
        }
      });
    });
  }
})(jQuery);


$(window).konami(function(){
  var msg = [];

  msg.push('@fnando: Na próxima vez que alguém disser que trabalhar com ruby/rails no windows, vou dar um abraço. você é um herói!');
  msg.push('@firt: Fourth time that I explain this just this week: jQuery Mobile is not the mobile version of jQuery');
  msg.push('@fnando: impossível falar de mass assignment sem citar o Homakov e o caso Github.');
  msg.push('@firt: Performance on mobile is so important. For Facebook, 2x faster, means 2x content consumption and 1.5 stars to 4 stars in 3 weeks');
  msg.push('@dwayhs: GITHUB é o currículo do desenvolvedor!!!!!');
  msg.push('@rgarbin: Que tal criar um testes agora para esta demanda?');
  msg.push('@rgarbin: Que tal voltar a trabalhar agora?'); 
  msg.push('#RoR: Keep it simple, stupid!');
  msg.push('#RoR: Dont repeat your self!');
  msg.push('#RoR: Convetion over configuration!');
  msg.push('#python: Beautiful is better than ugly!');
  msg.push('#python: Explicit is better than implicit.!');
  msg.push('#python: Simple is better than complex.');
  msg.push('#python: Complex is better than complicated.');
  msg.push('#python: Flat is better than nested.');
  msg.push('#python: Sparse is better than dense');
  msg.push('#python: Readability counts.');
  msg.push('#python: Special cases are not special enough to break the rules.');
  msg.push('#python: Although practicality beats purity');
  msg.push('#python: Errors should never pass silently.');
  msg.push('#python: Unless explicitly silenced.');
  msg.push('#python: In the face of ambiguity, refuse the temptation to guess.');
  msg.push('#python: There should be one-- and preferably only one --obvious way to do it.');
  msg.push('#python: Although that way may not be obvious at first unless you are Dutch.');
  msg.push('#python: Now is better than never.');
  msg.push('#python: Although never is often better than *right* now.');
  msg.push('#python: If the implementation is hard to explain, it is a bad idea.');
  msg.push('#python: If the implementation is easy to explain, it may be a good idea.');
  msg.push('@fnando: Clean Code is an Asset for your Company!');
  msg.push('@rafaelp: Nenhum de nós é tão bom quanto todoa nós juntos');

  alert(msg[Math.floor(Math.random() * msg.length)]);
});
