#include <iomanip> // Forma o numero de casas decimais
#include <string> // Gerencia variavel de texto
#include <iostream> // input and output

#include <bits/stdc++.h> // Biblioteca universal!!!

using namespace std;

int main()
{
    string nome;
    int idade;
    double altura;
    char genero;
    int N;
    int numero;

    N = 0;
    idade = 18;
    altura = 1.65326;

    cout << "Digite seu nome: ";
    getline(cin, nome); // codigo para lê uma string, com o getline não e preciso limpa a linha depois dele,  mas apenas o getline
    cout << "Digite seu genero: ";
    cin >> genero;
    // cin.ignore(INT_MAX, '\n') Limpa o input

    cout << fixed << setprecision(2); // Formatação de ponto futuante
    // cout << ____; = printf("")
    cout << "Ola, meu nome e " << nome << "," << endl;
    // cout << _____ << endl; -> endl; = \n pode usar um ou o outro
    cout << "eu tenho " << idade << " anos e " << altura << " metros" << "," << endl;
    cout << "e meu sexo é " << genero << "." << endl;

    /*
    int vet[3];

    while(N < 3){
        cout << "Digite o numero que voce que coloca no vetor, e para sair do mesmo coloque 0: ";
        cin >> numero;
        vet[N] = numero;
        N++;
    }

    cout << "Seu vetor ficou: " << endl;

    for(int i = 0; i < 3; i++){
        if(i == 2){
            cout << vet[i];
        } else {
            cout << vet[i] << ", ";
        }
    }
    */

    return 0;
}
