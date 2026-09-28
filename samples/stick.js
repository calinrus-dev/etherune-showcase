// JavaScript port of the directional mapping in TouchStick.gd.
// Finger ownership below is a new isolated reference, without game singletons.
export function stickVector(dx,dy,radius) {
  if(![dx,dy,radius].every(Number.isFinite)||radius<=0)throw new RangeError('Finite coordinates and a positive radius are required.');
  let x=dx/radius,y=dy/radius;
  const length=Math.hypot(x,y);
  if(length>1){x/=length;y/=length;}
  const strength=value=>value>0.12?0.15+(value-0.12)/(1-0.12)*(1-0.15):0;
  return {x,y,left:strength(Math.max(0,-x)),right:strength(Math.max(0,x)),up:strength(Math.max(0,-y)),down:strength(Math.max(0,y))};
}

export function createStick(radius=100) {
  let owner=null,origin=null,vector=stickVector(0,0,radius);
  return {
    begin(id,x,y){if(owner!==null)return false;stickVector(x,y,radius);owner=id;origin={x,y};return true;},
    move(id,x,y){if(id!==owner||owner===null)return vector;vector=stickVector(x-origin.x,y-origin.y,radius);return vector;},
    end(id){if(owner!==null&&id===owner)this.cancel();return vector;},
    cancel(){owner=null;origin=null;vector=stickVector(0,0,radius);},
    state(){return {...vector,active:owner!==null};},
  };
}
