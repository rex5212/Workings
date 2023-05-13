import java.util.Locale;
import java.util.Scanner; 


public class Main
{
	public static void main(String[] args) {
	    
        Scanner sc = new Scanner(System.in); // criou o input que foi apelidado de sc
	    
	    int idade;
	    double altura, salario;
	    boolean situacao;
	    String nome;
	    char sexo;
	    
	    salario = 0.0;
	    
	    Locale.setDefault(Locale.US); //faz com que aparesa ponto en vez de , no console mas nao funcionou, arrumar isso
	    
     	System.out.print("Qual a sua idade: ");
     	// System.out.println(); = printf(); podendo se System.out.print();
     	idade = sc.nextInt();
     	System.out.print("Qual a sua altura: ");
     	altura = sc.nextDouble();
     	System.out.print("Qual sua situação financeira: ");
     	situacao = sc.nextBoolean();
     	if(situacao == true){
     	    System.out.print("Qual o seu Salario: ");
     	    salario = sc.nextDouble();
     	}
     	System.out.print("Qual seu nome: ");
     	sc.nextLine(); // limpexa do input == cin.igonore(MAX_INT, "\n");
     	nome = sc.nextLine();
     	
     	System.out.print("Qual e o seu sexo: ");
     	sexo = sc.next().charAt(0); 
     	
     	System.out.print("Meu nome é " + nome + "\n");
     	if (sexo == 'f'){
     	    System.out.print("Do Sexo Feminino");
     	} else if (sexo == 'm'){
     	    System.out.print("Do sexo Masculino");
     	} else {
     	    System.out.print("Sexo indefinido");
     	}
     	System.out.print("\nTenho " + String.format("%.2f", altura) + " de altura\n");
     	// String.format("%.2f", variavel) forma o tanto de casas deois da virgula/ponto
     
     	if(situacao == true){
     	    System.out.print("Ganho R$ " + String.format("%.2f", salario));
     	} else{
     	    System.out.print("Sou Desempregado");
     	}
     	
     	sc.close();
	}
}