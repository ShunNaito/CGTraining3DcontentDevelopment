#pragma strict

var Speed = 20.0;
function Start () {
	var rb = GetComponent.<Rigidbody>();
	rb.AddForce((transform.forward + transform.right) * Speed, ForceMode.VelocityChange);
}

function Update () {

}