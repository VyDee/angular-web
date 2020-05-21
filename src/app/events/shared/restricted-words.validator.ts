import { FormControl } from '@angular/forms'

export function restrictedWords (words){
    return (control: FormControl) : {[key:string]:any} => { //:{[...]} -- this is return an object
                                                            // => {...} -- that returns a function
        if (!words) return null

        var invalidWords = words
            .map(w => control.value.includes(w) ? w : null) //map function is looping over all the keyword in
                                                            //the array and checking if the value includes that word
                                                            //or not. If it is return the word, not return null
            .filter(w => w != null) // filter out null words
                                    //invalid words contains any invalid words that we found in the control value

        return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : null 
                                                        //if it is invalid and we return the word, otherwise return null if it is valid
    }
}