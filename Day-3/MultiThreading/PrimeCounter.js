function isPrime(n){
	if (n <= 3 ) return true;
	for(var i=2;i<n/2;i++)
		if (n % i === 0) return false;
	return true;
}