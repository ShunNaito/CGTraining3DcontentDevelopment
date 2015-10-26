#pragma strict

var bullet : Rigidbody;
var power : int = 50;
private var distance : int = 100;

function Start() {
}

function Update() {
  if(Input.GetButtonDown("Fire1")) {
    var clone : Rigidbody = Instantiate(bullet, transform.position, transform.rotation);
		
    var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
    var point : Vector3 = ray.origin + (ray.direction * distance);
		
    var dir : Vector3 = point - transform.position;
		
    dir.Normalize();
		
    clone.velocity = transform.TransformDirection(dir * power);
		
    Destroy(clone.gameObject, 3);
  }
}