import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
   Form,
   FormControl,
   FormDescription,
   FormError,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';
import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
   CardFooter,
} from '@/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUserSchema } from '@/validation-schemas';
import { Icons } from '@/components/icons';
import { z } from 'zod';
import { useLocation, useNavigate } from 'react-router-dom';

type FormRegisterValues = z.infer<typeof registerUserSchema>;

const RegisterPage = () => {
   const navigate = useNavigate();
   const { state } = useLocation();

   const form = useForm<FormRegisterValues>({
      defaultValues: {
         email: state?.email || '',
         password: state?.password || '',
         confirmPassword: '',
      },
      resolver: zodResolver(registerUserSchema),
   });

   const onSubmit = (data: FormRegisterValues) => console.log(data);

   const redirectToLogin = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      navigate('/login');
   };

   return (
      <Card className="w-[400px]">
         <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
               Unlock Your Potential: Register Today for Exclusive Access!
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
                  <Controller
                     name="confirmPassword"
                     control={form.control}
                     rules={{ required: true }}
                     render={({ field }) => {
                        return (
                           <FormItem>
                              <FormLabel>Confirm password</FormLabel>
                              <FormControl>
                                 <Input error={form.formState.errors.confirmPassword?.message} placeholder="Confirm password" type="password" {...field} />
                              </FormControl>
                              {form.formState.errors.confirmPassword?.message && (
                                 <FormError>
                                    {form.formState.errors.confirmPassword?.message}
                                 </FormError>
                              )}
                              <FormDescription>Please confirm your password</FormDescription>
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
               Already have an account?{' '}
               <a
                  href="/login"
                  className="underline underline-offset-4 hover:text-primary"
                  onClick={redirectToLogin}
               >
                  Login
               </a>{' '}
            </p>
         </CardFooter>
      </Card>
   );
};

export default RegisterPage;
