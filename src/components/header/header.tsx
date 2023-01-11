import React, {FC} from 'react';
import {
    Header_container,
    Header_item, Header_logo, Header_section,
} from "./header.styled";

const Header: FC = () => {
    return (
        <Header_section>
            <Header_container>
                <Header_item>
                    <Header_logo>Тудушка на Typescript</Header_logo>
                </Header_item>
            </Header_container>
        </Header_section>
    );
};
export default Header;