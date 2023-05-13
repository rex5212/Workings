#include <stdio.h>
#include <stdlib.h>

void clearInput() {
     char c;
     while ((c = getchar()) != '\n' && c != EOF) {}
}
void readText(char *buffer, int length) {
     fgets(buffer, length, stdin);
     strtok(buffer, "\n");
}

int main()
{
    /*
       !!! Debug esta com erro na inicialização é necessario da o break point e ir da step into se não ele n ira reconhece o break
       int - %d || %i (32 bits),
       long int - %li (32 bits),
       long long int - %lli (64 bits),
       float - %f (precisão simples),
       double - %lf  (precisão dupla),
       char - %c (caractere),
       char[] - %s (string),
       scanf = input, coloca o placeholder respectivo a o nome da variavel digitada,
       fgets = input so que para string, utiliza o fgets pasando o nome da variavel, e tamanho e a biblioteca
       strtok lê a variavel ate certo parameto, no caso foi ate a quebra de linha
       &variavel = ao endereço de espaço que essa varivel esta
       ?fseek = tambem faz a limpeza do input mas de maneira diferente (apender)?
    */

    int Int;
    double Double;
    char Char;
    char String[50];

    printf("Escreva um texto: ");
    readText(String, 50);

    printf("Escreva um nunero: ");
    scanf("%i", &Int);

    printf("Escreva um numero flutuante: ");
    scanf("%lf", &Double);

    printf("Escreva um caracte: ");
    clearInput();
    scanf("%c", &Char);


    printf("%i\n", Int);
    printf("%.2lf\n", Double);
    printf("%c\n", Char);
    printf("%s\n", String);

    int vetor[3];
    vetor[0] = 2;
    vetor[1] = 4;
    vetor[2] = 6;

    for (int i = 0; i < 3; i++){
        printf("%i", vetor[i]);
    }

    printf("\n");

    int C = 3;
    int L = 3;
    int matriz[C][L];
    printf("Vamos faze uma caluna de 3x3: \n");

    for (int i = 0; i < L; i++){
        for (int j = 0; j < C; j++){
            printf("Valor do Elemento [%i][%i]: ", i, j);
            scanf("%d", &matriz[i][j]);
        }
        printf("\n");
    }


    for (int i = 0; i < L; i++){
        for (int j = 0; j < C; j++){
            printf("%i", matriz[i][j]);
        }
        printf("\n");
    }

 return 0;
}
