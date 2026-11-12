let Baccha_BOX1 = document.querySelector ( "#Baccha_BOX1" );
let Baccha_BOX2 = document.querySelector ( "#Baccha_BOX2" );
let Baccha_BOX3 = document.querySelector ( "#Baccha_BOX3" );
let Self_Bottom_Baccha_After_Box1 = document.querySelector ( "#Self_Bottom_Baccha_After_Box1" );
let Self_Bottom_Baccha_After_Box2 = document.querySelector ( "#Self_Bottom_Baccha_After_Box2" );
let Self_Bottom_Baccha_After_Box3 = document.querySelector ( "#Self_Bottom_Baccha_After_Box3" );
let LastSelected = 1;
Baccha_BOX1.addEventListener ( "mouseenter", ()=>{
    let mediaQuery = window.matchMedia("(min-width: 1025px)");
    if ( mediaQuery.matches ) {
        if ( Self_Bottom_Baccha_After_Box1.classList.contains ( "Bacca_Show" ) == false ) {
            Self_Bottom_Baccha_After_Box1.classList.add ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box1.classList.remove ( "Bacca_Hidden" );
            LastSelected = 1;
        } 
        if ( Self_Bottom_Baccha_After_Box2.classList.contains ( "Bacca_Show" ) == true ) {
            Self_Bottom_Baccha_After_Box2.classList.remove ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box2.classList.add ( "Bacca_Hidden" );
        } 
        if ( Self_Bottom_Baccha_After_Box3.classList.contains ( "Bacca_Show" ) == true ) {
            Self_Bottom_Baccha_After_Box3.classList.remove ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box3.classList.add ( "Bacca_Hidden" );
        } 
    }
});
Baccha_BOX2.addEventListener ( "mouseenter", ()=>{
    let mediaQuery = window.matchMedia("(min-width: 1025px)");
    if ( mediaQuery.matches ) {
        if ( Self_Bottom_Baccha_After_Box2.classList.contains ( "Bacca_Show" ) == false ) {
            Self_Bottom_Baccha_After_Box2.classList.add ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box2.classList.remove ( "Bacca_Hidden" );
            LastSelected = 2;
        } 
        if ( Self_Bottom_Baccha_After_Box1.classList.contains ( "Bacca_Show" ) == true ) {
            Self_Bottom_Baccha_After_Box1.classList.remove ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box1.classList.add ( "Bacca_Hidden" );
        } 
        if ( Self_Bottom_Baccha_After_Box3.classList.contains ( "Bacca_Show" ) == true ) {
            Self_Bottom_Baccha_After_Box3.classList.remove ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box3.classList.add ( "Bacca_Hidden" );
        } 
    }
});
Baccha_BOX3.addEventListener ( "mouseenter", ()=>{
    let mediaQuery = window.matchMedia("(min-width: 1025px)");
    if ( mediaQuery.matches ) {
        if ( Self_Bottom_Baccha_After_Box3.classList.contains ( "Bacca_Show" ) == false ) {
            Self_Bottom_Baccha_After_Box3.classList.add ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box3.classList.remove ( "Bacca_Hidden" );
            LastSelected = 3;
        } 
        if ( Self_Bottom_Baccha_After_Box2.classList.contains ( "Bacca_Show" ) == true ) {
            Self_Bottom_Baccha_After_Box2.classList.remove ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box2.classList.add ( "Bacca_Hidden" );
        } 
        if ( Self_Bottom_Baccha_After_Box1.classList.contains ( "Bacca_Show" ) == true ) {
            Self_Bottom_Baccha_After_Box1.classList.remove ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box1.classList.add ( "Bacca_Hidden" );
        } 
    }
});
let desktop = window.matchMedia("(min-width: 1025px)");
desktop.addEventListener ( "change" , ()=>{
    if ( desktop.matches == false ) {
        if ( Self_Bottom_Baccha_After_Box1.classList.contains ( "Bacca_Show" ) == true ) {
            Self_Bottom_Baccha_After_Box1.classList.remove ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box1.classList.add ( "Bacca_Hidden" );
        } 
        if ( Self_Bottom_Baccha_After_Box2.classList.contains ( "Bacca_Show" ) == true ) {
            Self_Bottom_Baccha_After_Box2.classList.remove ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box2.classList.add ( "Bacca_Hidden" );
        } 
        if ( Self_Bottom_Baccha_After_Box3.classList.contains ( "Bacca_Show" ) == true ) {
            Self_Bottom_Baccha_After_Box3.classList.remove ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box3.classList.add ( "Bacca_Hidden" );
        }
    }
    else {
        if ( LastSelected == 1 ) {
            Self_Bottom_Baccha_After_Box1.classList.add ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box1.classList.remove ( "Bacca_Hidden" );
        }
        else if ( LastSelected == 2 ) {
            Self_Bottom_Baccha_After_Box2.classList.add ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box2.classList.remove ( "Bacca_Hidden" );
        }
        else {
            Self_Bottom_Baccha_After_Box3.classList.add ( "Bacca_Show" );
            Self_Bottom_Baccha_After_Box3.classList.remove ( "Bacca_Hidden" );
        }
    }
});