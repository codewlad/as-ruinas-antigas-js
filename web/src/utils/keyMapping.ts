type KeyProps = {
    key: string;
    id: string;
}

export const HandleKeyPress = ({key, id}:KeyProps) => {

    switch(id) {
        case 'home':
            if(key === 'a') {
                return true;
            }
            break;

        case 'message':
            if(key === 'a') {
                return true;
            }
            break;
        default:
            console.log('outro');
            break;
    }
}