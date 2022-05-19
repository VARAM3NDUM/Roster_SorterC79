sa = [];

function submit()
{
    var n1 = document.getElementById("s1").value;
    var n2 = document.getElementById("s2").value;
    var n3 = document.getElementById("s3").value;
    var n4 = document.getElementById("s4").value;

    sa.push(n1);
    sa.push(n2);
    sa.push(n3);
    sa.push(n4);

    document.getElementById("display").innerHTML = sa;


}

function sorting()
{
    sa.sort();
    document.getElementById("display2").innerHTML = sa;
}
