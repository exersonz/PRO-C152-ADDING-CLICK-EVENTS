//creating a custom component
AFRAME.registerComponent("car-model", {
    schema: {
        modelRef: {type: "string", default: "../car_model/scene.gltf"}
    },
    init: function(){
        //do something when the component is first attached
        this.el.setAttribute("gltf-model", this.data.modelRef);
        const position = {x: 0, y: 1, z: 0};
        const rotation = {x: 0, y: -100, z: 0};
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
    }
});

AFRAME.registerComponent("move-car", {
    schema: {
        clickCounter: {type: "number", default: 0}
    },
    update: function(){
        window.addEventListener("click", (e) => {
            this.data.clickCounter = this.data.clickCounter + 1;
            if(this.data.clickCounter === 1)
            {
                const rotation = {x: 0, y: 20, z: 0};
                this.el.setAttribute("rotation", rotation);
            }
            
            else if(this.data.clickCounter === 2)
            {
                const rotation = {x: 0, y: 100, z: 0};
                this.el.setAttribute("rotation", rotation);
            }
        });
    }
});