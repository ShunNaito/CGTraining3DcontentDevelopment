#pragma strict
var hp :int = 2;

function OnCollisionEnter(collision: Collision) {
	hp--;
    if (hp == 0){
        Destroy(gameObject);
    }
}