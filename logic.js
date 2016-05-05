$(function(){
    var clicked=[];
    var logic=[0,0,0,0,0,0,0,0,0];
    var j=1;
    var ind=0;
    var winner='';
    var flag=true;
    function whoiswin(j){
        if(j>=3) {
            if (sum1(logic) === 3 || sum2(logic) === 3 || sum3(logic) === 3) {
                return 'Cross won!';
            } else if (sum1(logic) === -3 || sum2(logic) === -3 || sum3(logic) === -3) {
                $('div').removeClass('in');
                return 'Zero won!';
            }
        }
        if(j===10){
            return 'Friends won!';
        }
        return '';
    }
    function sum1(mat){
        var sum =0;
        var i=0;
        while(i<=2 && Math.abs(sum)!==3){
            sum=mat[i]+mat[i+3]+mat[i+6];
            i+=1;
        }
        return sum
    }
    function sum2(mat){
        var sum =0;
        var i=0;
        while(i<=6 && Math.abs(sum)!==3){
            sum=mat[i]+mat[i+1]+mat[i+2];
            i+=3
        }
        return sum;
    }
    function sum3(mat){
        var sum =0;
        if(Math.abs(mat[0]+mat[4]+mat[8])===3){
            sum = mat[0]+mat[4]+mat[8];
        }else if(Math.abs(mat[2]+mat[4]+mat[6])===3){
            sum = mat[2]+mat[4]+mat[6]
        }
        return sum
    }
    for(var i=0;i<9;i++) {
        $("#c").append('<div class=in id='+i+'>'+'</div>');
    }
    $('.in').click(function () {
        if (clicked.indexOf(this) === -1 && flag) {
            if (j % 2 === 0) {
                $(this).addClass('click2');
                clicked.push(this);
                ind = this.id;
                logic[ind] = -1;
            } else {
                $(this).addClass('click1');
                clicked.push(this);
                ind = this.id;
                logic[ind] = 1;
            }
            j++;
            winner = whoiswin(j);
            if (winner !== '') {
                alert(winner);
                flag=false;
            }
        }
    $('button').click(function(){
        $('div').removeClass('click2');
        $('div').removeClass('click1');
        clicked=[];
        winner='';
        flag=true;
        j=1;
        logic=[0,0,0,0,0,0,0,0,0]
    })
        });
});