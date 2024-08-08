function first(){
    console.log('First o_O');
    setTimeout(()=>{
        console.log('first script it\'s working');
    },700);
}
function second(){
    console.log('TWO O_o');
    setTimeout(()=>{
        console.log('two script that working');
    },100);
}
function threeth(){
    console.log('^_^');
    setTimeout(()=>{
        console.log('threeth and he working');
    });
}

async function asyncAwait(){
    await first();
    await threeth();
    await second();
}
asyncAwait();