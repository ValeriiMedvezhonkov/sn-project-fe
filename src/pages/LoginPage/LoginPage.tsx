import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/components/ui';
import { Input } from '@/components/ui';
import {
   Form,
   FormControl,
   FormDescription,
   FormError,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui';
import { Icons } from '@/components/icons';
import { loginUserSchema } from '@/validation-schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLocation, useNavigate } from 'react-router-dom';

type FormLoginValues = z.infer<typeof loginUserSchema>;

const LoginPage = () => {
   const navigate = useNavigate();
   const { state } = useLocation();

   const form = useForm<FormLoginValues>({
      defaultValues: {
         email: state?.email || '',
         password: state?.password || '',
      },
      resolver: zodResolver(loginUserSchema),
   });

   const onSubmit = (data: FormLoginValues) => console.log(data);

   const redirectToRegister = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      navigate('/register');
   };

   return (
      <Card className="w-[400px]">
         <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
               Welcome Back: Login for Seamless Access to Your World!
            </CardDescription>
         </CardHeader>
         <CardContent className="space-y-2 grid gap-4">
            <div className="grid grid-cols-2 gap-6">
               <Button variant="outline">
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                  Github
               </Button>
               <Button variant="outline">
                  <Icons.google className="mr-2 h-4 w-4" />
                  Google
               </Button>
            </div>
            <div className="relative">
               <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
               </div>
               <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
               </div>
            </div>
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <Controller
                     name="email"
                     control={form.control}
                     rules={{ required: true }}
                     render={({ field }) => {
                        return (
                           <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                 <Input error={form.formState.errors.email?.message} placeholder="Email" {...field} />
                              </FormControl>
                              {form.formState.errors.email?.message && (
                                 <FormError>{form.formState.errors.email?.message}</FormError>
                              )}
                              <FormDescription>This is your public display name.</FormDescription>
                              <FormMessage />
                           </FormItem>
                        );
                     }}
                  />
                  <Controller
                     name="password"
                     control={form.control}
                     rules={{ required: true }}
                     render={({ field }) => {
                        return (
                           <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                 <Input error={form.formState.errors.password?.message} placeholder="Password" type="password" {...field} />
                              </FormControl>
                              {form.formState.errors.password?.message && (
                                 <FormError>{form.formState.errors.password?.message}</FormError>
                              )}
                              <FormDescription>This is your public display name.</FormDescription>
                              <FormMessage />
                           </FormItem>
                        );
                     }}
                  />
                  <Button className="w-full" type="submit" variant="default" size="lg">
                     Create account
                  </Button>
               </form>
            </Form>
         </CardContent>
         <CardFooter>
            <p className="text-center text-sm text-muted-foreground w-full">
               Don&apos;t have an account?{' '}
               <a
                  href="/register"
                  className="underline underline-offset-4 hover:text-primary"
                  onClick={redirectToRegister}
               >
                  Sign Up
               </a>
            </p>
         </CardFooter>
      </Card>
   );
};

export default LoginPage;
