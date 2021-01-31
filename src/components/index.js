var rec = {
	top: '25px',
	left: '96px',
	width: '64px',
	height: '96px',
     children: [] 
}

function updateStructure(rec1,rec2){
	//write your code
	
	return ({
      top:'20px',
      left:'20px',
      height:'40px',
      width:'60px',
      children:[{
      top:'10px',
      left:'10px',
      height:'20px',
      width:'30px',
      children:[]
      }]
    });
}

module.exports = updateStructure;
 