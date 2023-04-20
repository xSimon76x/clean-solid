(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    interface HtmlElementProps {
        id: string,
        type: HtmlType,
    }

    interface InputAttributesProps {
        value: string,
        placeholder: string,
    }

    interface InputEventsProps {
        id: string,
        value: string,
        placeholder: string,
    }
   
    class HtmlElement {

        public id: string;
        public type: HtmlType;


        constructor({
            id
        }: HtmlElementProps) {
            this.id = id,
            this.type = 'input'
        }
    }

    class InputAttributes {

        public value: string;
        public placeholder: string;

        constructor({ value, placeholder }: InputAttributesProps) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {

        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    class InputElement {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        constructor({
            id,
            value, 
            placeholder
        }: InputEventsProps ) {
            
            this.htmlElement = new HtmlElement({
                id,
                type: 'input',
            });

            this.inputAttributes = new InputAttributes({
                value,
                placeholder
            });

            this.inputEvents = new InputEvents();
        
        }
    }

    const nameField = new InputElement({
        id: 'txtName',
        value :'Fernando', 
        placeholder: 'Enter first name'
    });

    console.log({ nameField });

})()