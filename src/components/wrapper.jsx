import React from "react";
import { Container, Box } from "bloomer";

const Wrapper = props => {
    return (
        <Container >
            <Box className="error-box">
                {props.children}
            </Box>
        </Container>
    )
}

export default Wrapper;