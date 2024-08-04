import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, CardContent, TextField } from "@mui/material"
import { useForm } from "react-hook-form";
import * as yup from 'yup';




function Login() {

    const schema = yup.object().shape({
        email: yup.string().required('Email is required').email("Invalid email address"),
        password: yup.string().required(),
    })

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const loginSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <div>
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit(loginSubmit)}>
                        <TextField fullWidth label="Email" variant="filled" {...register("email")} />
                        <p style={{ color: "red" }}>{errors.email?.message}</p>
                        <TextField fullWidth label="Pasword" type="password" variant="filled" {...register("password")} />
                        <p style={{ color: "red" }}>{errors.password?.message}</p>
                        <br />
                        <br />
                        <Button type="submit" variant="contained">Login</Button>
                    </form>

                </CardContent>
            </Card>
        </div>
    )
}

export default Login