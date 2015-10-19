#pragma strict

var Accel = 1000;

function FixedUpdate()
{
	GetComponent.<Rigidbody>().AddForce( 
		transform.right * Input.GetAxisRaw( "Horizontal" ) * Accel, 
		ForceMode.Impulse );
}