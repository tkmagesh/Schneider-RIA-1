function isPrime(n){
	if (n <= 3 ) return true;
	for(var i=2;i<=n/2;i++)
		if (n % i === 0) return false;
	return true;
}
self.addEventListener("message",function(msgEvt){
	var req = msgEvt.data, start, end, primeCount = 0, progressThreshold;
	start = req.start;
	end = req.end;
	progressThreshold = (end - start) / 20;
	if (req.type === "start"){
		for(var i=start;i<=end;i++){
			if (isPrime(i)) primeCount++;
			//If threshold reached
			if (i % progressThreshold === 0){
				var percentCompleted = ((i - start) / progressThreshold) * 5;
				self.postMessage({
					type : "progress",
					percentCompleted : percentCompleted,
					primeCount : primeCount
				});
			}
		}
		var res = {
			type : "completed",
			primeCount : primeCount,
			start : start,
			end : end
		};
		self.postMessage(res);
	}
})