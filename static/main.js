import './style.css';
import { foo } from '../src/foo.js';

function dingdong() {
  console.log("hiti", window.x);
}
foo();

dingdong();
window.x = 3;
