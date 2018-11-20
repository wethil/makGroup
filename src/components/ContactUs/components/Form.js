import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            subject: '',
            message: '',
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <Grid
                container
                sm={12}
                md={6}
                xs={12}
                justify='center'
                alignContent='center'
                alignItems='center'
            >

                <TextField
                    fullWidth
                    id="outlined-name"
                    label="Name"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                 fullWidth
                    id="outlined-email-input"
                    label="Email"
                    onChange={this.handleChange('email')}
                    type="email"
                    name="email"
                    value={this.state.email}
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    id="outlined-name"
                    label="Subject"
                    value={this.state.subject}
                    onChange={this.handleChange('subject')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                 fullWidth
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    value={this.state.message}
                    rows="4"
                    onChange={this.handleChange('message')}
                    margin="normal"
                    variant="outlined"
                />
                <Grid
                    className='flex'
                    justify='flex-end'
                    sm={12}
                    md={12}
                    xs={12}
                >
                    <Button variant="contained" color="primary">
                        Write Us
                     </Button>
                </Grid>  
            </Grid>
        );
    }
}

export default Information;