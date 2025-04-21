import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInFormData, signInSchema } from "../schemas"
import { useAuth } from "@/context/AuthContext"
import { useNavigate } from 'react-router-dom';


export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const { onLogin } = useAuth();
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<signInFormData>({
        resolver: zodResolver(signInSchema),
    });

    const onSubmit = async (data: signInFormData) => {
        try {
            await onLogin(data.email, data.password);
            navigate("/");
        } catch (error) {
            console.log("Erro no login:", error);
        }
    };
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Bem vindo de volta</h1>
                                <p className="text-balance text-muted-foreground">
                                    Faça login na sua conta para continuar
                                </p>
                            </div>

                            {/* Email */}
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="m@example.com"
                                            {...field}
                                        />
                                    )}
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <a
                                        href="#"
                                        className="ml-auto text-sm underline-offset-2 hover:underline"
                                    >
                                        Esqueceu a senha?
                                    </a>
                                </div>
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            id="password"
                                            type="password"
                                            {...field}
                                        />
                                    )}
                                />
                                {errors.password && (
                                    <p className="text-sm text-red-500">{errors.password.message}</p>
                                )}
                            </div>

                            <Button type="submit" className="w-full">
                                Login
                            </Button>

                            <div className="text-center text-sm">
                                Não tem uma conta?{" "}
                                <a href="/signup" className="underline underline-offset-4">
                                    Cadastre-se
                                </a>
                            </div>
                        </div>
                    </form>

                    <div className="relative hidden bg-muted md:block">
                        <img
                            src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-login_114360-739.jpg"
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
