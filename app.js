var balance = 10000;
var sel='d';
$('.reset').click(function(){
    balance = 10000;
    sel = 'd';
    $('#bal').html(balance);
    $('.win').html("<h1>Bet your LUCK!</h1>");
    $('.pics').css('borderColor','rgb(43, 176, 36)');
    $('#d').css('borderColor','yellow');
    $("#d1").attr("src","dice6.png");
    $("#d2").attr("src","dice6.png");
});

$('.pics').click(function()
{
    var id = this.id;
    $('.pics').css('borderColor','rgb(43, 176, 36)');
    $("#"+id).css('borderColor','yellow');
    sel = id;
});

$('#placed').click(function()
{
    var x = $('#bet').val();
    var y = parseInt(x);
    if(balance==0)
    {
        alert("Reset");
    }
    if(y>balance)
    {
        alert("LOW Balance! Bet a smaller amount");
    }

    else
    {
        var a = Math.floor(Math.random()*6+1);
        var b = Math.floor(Math.random()*6+1);

        var s = a+b;

        if(s == 7 && sel=='e')
        {
            $('.win').html("<h1>Hurray! You Chose 7 & You Won</h1>");
            balance = balance+(y*2);
        }
        else if(s < 7 && sel=='d')
        {
            $('.win').html("<h1>Hurray! You Chose 7DOWN & You Won</h1>");
            balance = balance+(y);
        }
        else if(s>7 && sel=='u')
        {
            $('.win').html("<h1>Hurray! You Chose 7UP & You Won</h1>");
            balance = balance+(y);
        }
        else
        {
            $('.win').html("<h1>Ohoo! You Lost...Try Again</h1>");
            balance = balance-y;
        }
        let dice = document.querySelectorAll(".dc");
        dice.forEach(function(die){
            die.classList.add("shake");
        });
        setTimeout(function(){
            dice.forEach(function(die){
                die.classList.remove("shake");
            });
            $("#d1").attr("src","dice"+a+".png");
            $("#d2").attr("src","dice"+b+".png");
            $('#bal').html(balance);
        },
        1200
        );
        
        
    }
});

