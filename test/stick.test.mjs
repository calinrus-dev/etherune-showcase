import {test} from 'node:test';
import assert from 'node:assert/strict';
import {stickVector,createStick} from '../samples/stick.js';
test('diagonal movement is clamped to unit length',()=>{const v=stickVector(200,200,100);assert.ok(Math.abs(Math.hypot(v.x,v.y)-1)<1e-12);});
test('deadzone and first active strength are explicit',()=>{assert.equal(stickVector(12,0,100).right,0);assert.ok(stickVector(12.001,0,100).right>=.15);assert.equal(stickVector(100,0,100).right,1);});
test('opposing directional actions are never active together',()=>{for(let x=-200;x<=200;x+=5)for(let y=-200;y<=200;y+=5){const v=stickVector(x,y,100);assert.equal(v.left*v.right,0);assert.equal(v.up*v.down,0);assert.ok(v.left<=1&&v.right<=1&&v.up<=1&&v.down<=1);}});
test('the second finger cannot steal or release the active stick',()=>{const s=createStick();assert.ok(s.begin(0,0,0));assert.equal(s.begin(1,20,20),false);s.move(0,100,0);s.end(1);assert.equal(s.state().right,1);s.end(0);assert.equal(s.state().right,0);});
test('focus loss cancellation clears all actions',()=>{const s=createStick();s.begin(5,0,0);s.move(5,-100,100);s.cancel();assert.deepEqual(s.state(),{x:0,y:0,left:0,right:0,up:0,down:0,active:false});});
test('invalid geometry rejects rather than producing NaN strengths',()=>{assert.throws(()=>stickVector(0,0,0));assert.throws(()=>stickVector(Infinity,0,100));});
