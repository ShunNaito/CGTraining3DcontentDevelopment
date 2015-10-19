#pragma strict
private var time : float;
// 5秒後speed up(任意の値に変更でして下さい)
private var speedUptime : float = 5; 

var Speed = 20.0;
function Start () {
	var rb = GetComponent.<Rigidbody>();
	rb.AddForce((transform.forward + transform.right) * Speed, ForceMode.VelocityChange);
}

function Update () {
	time += Time.deltaTime;
	if( time >= speedUptime ){
		Speed = 30.0;
		Start();
	}
}