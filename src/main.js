/**
 * Brought to you by Yago Estévez. https://twitter.com/yagoestevez
 */
require( "babel-runtime/regenerator" );
import './index.html';
import './main.css';
import './svg.css';
import Sketch from './svg.js';

/******************************************************************************
  ADDING THE SVG AND ANIMATION LIBRARY TO THE DOM.
 ******************************************************************************/
// Add the SVG container to the HTML.
const nav = document.querySelector( '.menu' );
nav.insertAdjacentHTML( 'afterend', Sketch );

// Define the SVG element to be animated with SnapSVG.
const svg = document.getElementById( 'SVG' );
Snap( svg );

// Insert copy.
const link     = document.createElement( 'a' );
const linkText = document.createTextNode( 'Yago Estévez' );
link.id        = 'author';
link.title     = "Yago Estévez on Twitter";
link.href      = "https://twitter.com/yagoestevez";
link.target    = "_blank";
document.body.appendChild( link );
link.appendChild( linkText );

/******************************************************************************
  VARIABLE DEFINITIONS FOR THE ANIMATION.
 ******************************************************************************/
// Define the constants for speed and slight movements of the character.
const speed             = 300;
const lowPose           = 'translate(0,10)';
const lowerPose         = 'translate(0,20)';
const lowestPose        = 'translate(0,30)';
const lookRightPose     = 'translate(-10,0)';
const lookMoreRightPose = 'translate(-20,0)';
const lookLeftPose      = 'translate(10,0)';
const lookMoreLeftPose  = 'translate(20,0)';
const resetPose         = 'translate(0,0)';

// Store character poses for animation.
const BodyInitialPose   = Snap.select( '#Jorge-Body-Pose1'       );
const BodyEndingPose    = Snap.select( '#Jorge-Body-Pose2'       );
const BodyInitPosePath  = BodyInitialPose.node.getAttribute( 'd' );
const BodyEndPosePath   = BodyEndingPose.node.getAttribute(  'd' );

// Store character pieces individually.
const Head              = Snap.select( '#Jorge-Head'             );
const HeadDown          = Snap.select( '#Jorge-Head-Down'        );
const Eyebrows          = Snap.select( '#Jorge-Eyebrows'         );
const Eyes              = Snap.select( '#Jorge-Eyes'             );
const Cheeks            = Snap.select( '#Jorge-Cheeks'           );
const Ears              = Snap.select( '#Jorge-Ears'             );
const Mouth             = Snap.select( '#Jorge-Mouth'            );
const MouthSmile        = Snap.select( '#Jorge-Mouth-BigSmile'   );
const MouthOpen         = Snap.select( '#Jorge-Mouth-SmileOpen'  );
const Nose              = Snap.select( '#Jorge-Nose'             );
const HeadPath          = Head.node.getAttribute(         'd'    );
const HeadDownPath      = HeadDown.node.getAttribute(     'd'    );
const MouthPath         = Mouth.node.getAttribute(        'd'    );
const MouthSmilePath    = MouthSmile.node.getAttribute(   'd'    );
const MouthOpenPath     = MouthOpen.node.getAttribute(    'd'    );

/******************************************************************************
  ANIMATION FUNCTIONS.
 ******************************************************************************/
// Define the animation when showing sub-menus.
const enterMenuPose = ( ) => {
  BodyInitialPose.animate( { d: BodyEndPosePath }, speed, mina.backout, null );
  Head.animate( { d: HeadDownPath }, speed, mina.backout, null );
  Eyebrows.animate( { transform: lowPose }, speed, mina.backout, null );
  Eyes.animate( { transform: lowestPose }, speed, mina.backout, null );
  Cheeks.animate( { transform: lowestPose}, speed, mina.backout, null );
  Ears.animate( { transform: lowerPose}, speed, mina.backout, null );
  Mouth.animate( { d: MouthOpenPath }, speed, mina.backout, null );
  Nose.animate( { transform: lowPose }, speed, mina.backout, null );
}

// Define the animation when looking at About menu.
const enterLookRight = ( ) => {
  Head.animate( { transform: 'matrix(1,0,0,1,5,0)' }, speed, mina.backout, null );
  Ears.animate( { transform: 'matrix(1,0,0,1,8,0)' }, speed, mina.backout, null );
  Eyes.animate( { transform: lookMoreRightPose }, speed, mina.backout, null );
  Cheeks.animate( { transform: lookRightPose}, speed, mina.backout, null );
  Mouth.animate( { d: MouthSmilePath }, speed, mina.backout, null );
}

// Define the animation when looking at Contact menu.
const enterLookLeft = ( ) => {
  Head.animate( { transform: 'matrix(1,0,0,1,-5,0)' }, speed, mina.backout, null );
  Ears.animate( { transform: 'matrix(1,0,0,1,-8,0)' }, speed, mina.backout, null );
  Eyes.animate( { transform: lookMoreLeftPose }, speed, mina.backout, null );
  Cheeks.animate( { transform: lookLeftPose}, speed, mina.backout, null );
  Mouth.animate( { d: MouthSmilePath }, speed, mina.backout, null );
}

// Define the animation when looking at Home menu.
const enterLookDown = ( ) => {
  Head.animate( { transform: lowerPose }, speed, mina.backout, null );
  Ears.animate( { transform: lowerPose }, speed, mina.backout, null );
  Eyes.animate( { transform: lowestPose }, speed, mina.backout, null );
  Eyebrows.animate( { transform: lowerPose }, speed, mina.backout, null );
  Cheeks.animate( { transform: lowestPose}, speed, mina.backout, null );
  Mouth.animate( { d: MouthSmilePath, transform: lowerPose }, speed, mina.backout, null );
  Nose.animate( { transform: lowerPose }, speed, mina.backout, null );
}

// Define the animation when hiding sub-menus.
const leavePose = ( ) => {  
  BodyInitialPose.animate( { d: BodyInitPosePath }, speed, mina.backout, null );
  Head.animate( { d: HeadPath, transform: resetPose }, speed, mina.backout, null );
  Eyebrows.animate( { transform: resetPose }, speed, mina.backout, null );
  Eyes.animate( { transform: resetPose }, speed, mina.backout, null );
  Cheeks.animate( { transform: resetPose }, speed, mina.backout, null );
  Ears.animate( { transform: resetPose }, speed, mina.backout, null );
  Mouth.animate( { d: MouthPath, transform: resetPose }, speed, mina.backout, null );
  Nose.animate( { transform: resetPose }, speed, mina.backout, null );
}

// Reset the character's pose and submenus so it can start a new pose.
const resetToNewPose = ( ) => {
  onSubMenu = false;
  leavePose( );
  WidgetsSubMenuGroup.classList.remove( 'showSubMenu' );
  KabobsSubMenuGroup.classList.remove( 'showSubMenu' );
}


/******************************************************************************
  LISTENERS.
 ******************************************************************************/
let onSubMenu = false;

// Listeners for the About Menu Item.
const AboutMenuItem       = document.querySelector( '#About' );
AboutMenuItem.addEventListener( 'mouseover', ( ) => {
  resetToNewPose( );
  enterLookRight( );
} );
AboutMenuItem.addEventListener( 'mouseout', ( ) => {
  leavePose( );
} );

// Listeners for the Contact Menu Item.
const ContactMenuItem     = document.querySelector( '#Contact' );
ContactMenuItem.addEventListener( 'mouseover', ( ) => {
  resetToNewPose( );
  enterLookLeft( );
} );
ContactMenuItem.addEventListener( 'mouseout', ( ) => {
  leavePose( );
} );

// Listeners for the Home Menu Item.
const HomeMenuItem        = document.querySelector( '#Home' );
HomeMenuItem.addEventListener( 'mouseover', ( ) => {
  resetToNewPose( );
  enterLookDown( );
} );
HomeMenuItem.addEventListener( 'mouseout', ( ) => {
  leavePose( );
} );


// Listeners for the Widgets Menu Item.
const WidgetsMenuItem     = document.querySelector( '#Widgets' );
const WidgetsSubMenuGroup = document.querySelector( '#Widgets-SubMenu' );
WidgetsMenuItem.addEventListener( 'mouseover', ( ) => {
  KabobsSubMenuGroup.classList.remove( 'showSubMenu' );
  onSubMenu = true;
  enterMenuPose( );
  WidgetsSubMenuGroup.classList.add( 'showSubMenu' );
} );
WidgetsMenuItem.addEventListener( 'mouseout', ( ) => {
  if ( !onSubMenu ) {
    leavePose( );
    WidgetsSubMenuGroup.classList.remove( 'showSubMenu' );
  }
} );

// Listeners for the Kabobs Menu Item.
const KabobsMenuItem      = document.querySelector( '#Kabobs' );
const KabobsSubMenuGroup  = document.querySelector( '#Kabobs-SubMenu' );
KabobsMenuItem.addEventListener( 'mouseover', ( ) => {
  WidgetsSubMenuGroup.classList.remove( 'showSubMenu' );
  onSubMenu = true;
  enterMenuPose( );
  KabobsSubMenuGroup.classList.add( 'showSubMenu' );
} );
KabobsMenuItem.addEventListener( 'mouseout', ( ) => {
  if ( !onSubMenu ) {
    leavePose( );
    KabobsSubMenuGroup.classList.remove( 'showSubMenu' );
  }
} );

// Listener to check if the mouse is outside the Menu Area.
const outsideMenuArea = document.querySelector( '#canvas-size' );
outsideMenuArea.addEventListener( 'mouseover', ( ) => {
  resetToNewPose( );
} );