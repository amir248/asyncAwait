function second(){
    return new Promise((resolve) => {
            console.log('TWO O_o');
            let oK='two script that working it\'s two function';
        setTimeout(()=>{
            resolve(console.log(oK));
                toGoOnWriteAtThePage(oK);
        },3100);
    });
}
function threeth(){
    return new Promise((resolve) => {
            console.log('^_^');
            let oK='threeth and he working resolve three function FINALLY';
        setTimeout(()=>{
            resolve(console.log(oK));
            toGoOnWriteAtThePage(oK);
        },700);
    });
}
function first(){
    return new Promise((resolve) => {
        console.log('First o_O');
        let oK='O_o resolve First function';
        setTimeout(()=>{
           resolve(console.log(oK));
           toGoOnWriteAtThePage(oK);
        },3700);
    });
};


async function asyncAwait(){
    
    // let threeth = new Promise((resolve, reject)=>{
    //     console.log('^_^');
    //     setTimeout(()=>{
    //         console.log('threeth and he working');
    //     });
    // });

    // let first = new Promise((resolve, reject)=>{
    //     console.log('First o_O');
    //     setTimeout(()=>{
    //         console.log('first script it\'s working');
    //     },700);
    // });
    
    // let second = new Promise((resolve, reject)=>{
    //     console.log('TWO O_o');
    //     setTimeout(()=>{
    //         console.log('two script that working');
    //     },100);
    // });
    

    await first();

    await second();

    await threeth();
};

asyncAwait();


function toGoOnWriteAtThePage(text){
    let boxText = document.createElement('p');
    boxText.innerHTML=text;
    document.querySelector('main').append(boxText);
}
    
