function gradeCalculator(){
    switch (true) {
        case score >=40 && score < 50:
            return "D Grade"; 
			
				        case score >= 50 && score < 60:
						return "C Grade";
						
							        case score >= 60 && score < 70:
									return "B Grade";
									
										        case score >= 70 && score < 80:
												return "A Grade";
																								
													case score >= 80 && score <=100:
													return "Excellent Grade";
        default:
            return "Not a valid score";
    }
}

let score = 78;
console.log(gradeCalculator(score));