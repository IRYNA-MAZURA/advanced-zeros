module.exports = function getZerosCount(number, base) {
    var prime = [], primes = [];

    function get_primes()
    {
        for(var i = 0; i < 300; ++i) prime.push(1);
        prime[0] = prime[1] = 0;
        for(var i  = 2; i <300; ++i)
            if(prime[i])
            {
                primes.push(i);
                for(var j = i*i; j < 300; j+=i)
                    prime[j] = 0;
            }
    }

    function get_prime_divisors(a)
    {
        var ret = {};
        for(var i = 0; primes[i]<=a; ++i)
        {
            if(Math.floor(a)%Math.floor(primes[i])==0)
            {
                ret[Math.floor(primes[i])] = 0;
                while(Math.floor(a)%Math.floor(primes[i])==0)
                {
                    a /= primes[i];
                    ret[Math.floor(primes[i])] += 1;
                }
            }
        }
        return ret;
    }

    function get_Stepen_of_0(N, a)
    {
        var prime_divisors = get_prime_divisors(a);
        var ret_arr = [];
        for(var key in prime_divisors)
        {
            var step_of_key = prime_divisors[key];
            var p = 0;
            for(var i = key; i <= N; i*=key)
            {
                p += Math.floor(N/i);
            }
            ret_arr.push(Math.floor(p/step_of_key));
        }
        var min = Math.floor(100000000);
        for(var i = 0; i < ret_arr.length; ++i)
            min = Math.min(min, ret_arr[i]);
        return min;
    }

    get_primes();

    return get_Stepen_of_0(number, base);
}
