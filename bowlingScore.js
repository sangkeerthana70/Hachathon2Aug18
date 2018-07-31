

function CalculateBowlingScore(arr)
{
	
	let totalScore = 0;
	for (var i = 0; i < arr.length - 1; i=i+2)
	{
		console.log("i = ",i);
		console.log("roll 1 = ", arr[i]);
		console.log("roll 2 = ", arr[i+1]);
		
		
		// add frame score to total
		totalScore += arr[i] + arr[i+1];
		
		// calculate bonus
		// strike
		if (arr[i] == 10) 
		{
			console.log("strike!");
			// for last frame only one extra roll allowed
			if (i + 2 == arr.length)
			{
				totalScore += arr[i+2];
				console.log("bonus = ",arr[i+2]);
			}
			else
			{
				totalScore += arr[i+2] + arr[i+3];
				console.log("bonus = ",arr[i+2] + arr[i+3]);
			}
		}
		
		// spare
		else if (arr[i] + arr[i+1] == 10) 
		{
			console.log("spare!");
			console.log("bonus = ",arr[i+2]);
			totalScore += arr[i+2];
		}
		console.log("totalScore = ",totalScore);
		
	}

	return totalScore;
}

	var res = CalculateBowlingScore([1,4,4,5,6,4,5,5,10,0,0,1,7,3,6,4,10,0,2,8,6]);
	console.log(res);
	
	