


VarDate = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]
function Topping() 
{

	for (let i = 0; i< VarDate.length; i++) 
	{
	 var arr = VarDate[i].topping
   for (let t= 0; t< arr.length;t++ )
   {
  console.log(arr[t].type)
    
   }
	}


}
function Butters() 
{

	for (let i = 0; i< VarDate.length; i++) 
	{
	 var arr1 = VarDate[i].batters.batter
   for(let y = 0 ; y< arr1.length ; y++ )
   {
     console.log(arr1[y].type)
   }
	}


}
function ppuavg()
{
  arr = []
  let i = 0;
  for( let w =0 ; w<VarDate.length; w++) 
{ 
 var x  = arr.push(VarDate[w].ppu)
 for (let q =0 ; q <arr.length ; q++)
 {
   
 i+= arr[q]/arr.length
 }

  }

console.log(i)
}
function ppusum()
{
  
  let i = 0;
  for( let w =0 ; w<VarDate.length; w++) 
{ 
 i+= VarDate[w].ppu; 
 
}
 
 console.log(i)
}

 
function ids(){
  // list of ids
VarDate.forEach(element => element.batters.batter.forEach(test => console.log(test.id)))
VarDate.forEach(element => element.topping.forEach(test => console.log(test.id)))

}
 ids();
 ppusum();
 ppuavg();
 Butters();
 Topping();  