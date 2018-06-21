import java.io.Scanner;
Public class reverse{
	public static void main(String args[])
	{ 
	 int i;
	 Scanner ob =new Scanner();
	 int t=Integer.parseInt(ob.readLine());
	 int arr[]=new int[t];
	 for(i=0;i<t;i++)
	 {
	  arr[i]=Integr.parseInt(ob.nextInt());
	 }
     for(i=0;i<t;i++)
     {if(arr[i]!=0)
      reversenum(arr[i]);

      else
      System.out.println(0);
     }
	}

	public void reversenum(int x)
	{ 
	 int rem,
	 while(x!=0)
	 {
      rem=x%10;
      System.out.print(rem);
      int x=x/10;
	 }
	}

}