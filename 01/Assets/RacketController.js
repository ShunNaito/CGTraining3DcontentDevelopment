#pragma strict

var Accel = 1000.0;

function Update () {
	var rb = GetComponent.<Rigidbody>();
	rb.AddForce(transform.right * Input.GetAxisRaw("Horizontal") * Accel, ForceMode.Impulse);
}