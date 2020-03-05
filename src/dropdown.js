import React,{ useState } from "react";

const useDropDown = (label,defaultState,options) => {
    const [state,updateState] = useState(defaultState);
    const id = `use-dropdown-${label.replace(" ","").toLowerCase()}`
    const Dropdown = () => {
        return (
            <label htmlFor={ id }>
                { label }
                <select
                    id={ id }
                    value={ state }
                    onChange={ (e) => updateState(e.target.value) }
                    disabled={ !options.length }
                    onBlur={ (e) => updateState(e.target.value) }
                >
                    <option />
                    { options.map((option) => {
                        return (
                            <option key={ option } value={ option }>
                                { option }
                            </option>
                        );
                    }) }
                </select>
            </label>
        );
    }
    return [state,Dropdown,updateState];
};

export default useDropDown;