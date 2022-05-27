(function(){
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const result = x + y;
        console.log(`   [@service] returning result`)
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`)
        const result = addSync(x,y);
        console.log(`[@client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient;

    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@service] returning result`)
            callback(result);
        }, 4000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] invoking the service`)
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`)
        });
    }

    window['addAsyncClient'] = addAsyncClient;

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const promise = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                const result = x + y;
                console.log(`   [@service] returning result`)
                //communicate the result to the promise
                resolveFn(result)
            }, 4000);
        });
        return promise;
    }

    

    
    //client
   /*  
   function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`)
        var p = addAsyncPromise(100,200);
        p.then(function(result){
            console.log(`[@client] result = ${result}`)
        })
    } 
    */

    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`)
        const result = await addAsyncPromise(x,y);
        console.log(`[@client] result = ${result}`)
        return result * 2;
    }
    window['addAsyncPromiseClient'] = addAsyncPromiseClient;
})();