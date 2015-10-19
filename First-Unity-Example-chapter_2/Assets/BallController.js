#pragma strict

var Speed = 20;
var count = 0;

function Start(){
	GetComponent.<Rigidbody>().AddForce( ( transform.forward + transform.right ) * Speed, ForceMode.VelocityChange );
}

function Update(){
	Debug.Log(Time.time);
	if (Time.time > 5 && count < 1){
		GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity * 1.5f;
		count++;
	}
}