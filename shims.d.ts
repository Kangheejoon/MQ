// Auto-generated. Do not edit.



    //% color=50 weight=80
    //% icon="\uf1eb"
declare namespace maqueenIR {

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="만약 |%btn| 버튼을 눌렀을시" shim=maqueenIR::onPressEvent
    function onPressEvent(btn: RemoteButton, body: () => void): void;

    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="IR 수신기에 연결  %pin" shim=maqueenIR::initIR
    function initIR(pin: Pins): void;
}



    //% color=50 weight=80
    //% icon="\uf1eb"
declare namespace maqueenIRV2 {
}

// Auto-generated. Do not edit. Really.
