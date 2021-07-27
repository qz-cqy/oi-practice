#include<bits/stdc++.h>
#include<windows.h>
#define chek(VK_NONAME) ((GetAsyncKeyState(VK_NONAME) & 0x8000) ? 1:0)
#define col(co) SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE),co)
#define br BACKGROUND_RED
#define bg BACKGROUND_GREEN
#define bb BACKGROUND_BLUE
#define bi BACKGROUND_INTENSITY
#define fr FOREGROUND_RED
#define fg FOREGROUND_GREEN
#define fb FOREGROUND_BLUE
#define fi FOREGROUND_INTENSITY
using namespace std;
char hl[150][40]={"asm","do","if","return","typedef","auto","double",
                  "inline","short","typeid","bool","dynamic_cast","int",
                  "signed","typename","break","else","long","sizeof",
                  "union","case","enum","mutable","static","unsigned",
                  "catch","explicit","namespace","static_cast","using",
                  "char","export","new","struct","virtual","class",
                  "extern","operator","switch","void","const","false",
                  "private","template","volatile","const_cast","float",
                  "protected","this","wchar_t","continue","for","public",
                  "throw","while","default","friend","register","true",
                  "delete","goto","reinterpret_cast","try","in"};
int l=64;
/*
theme:
    0:Highlight Word
    1:Normal Word
    2:Definding Word
    3:char,string Word
    4:Numbers
    5:Symbols
    6:Notes
*/
int themePAS[]={bb+fr+fg+fb+fi,
                bb+fg+fr+fi,
                bb+fg+fi,
                bb+fg+fb+fi,
                bb+fg+fb+fi,
                bb+fr+fi,bb+fi};
void init()
{
    freopen("cppword.hl","r",stdin);
    char c[40];
    while (cin>>c)
    {
        l++;
        for (int i=0;i<40;i++)
            hl[l][i]=c[i];
    }
    freopen("CON","r",stdin);
    return;
}
int check(char p[],int pl)
{
    int tt=0;
/*  for (int i=0;i<pl;i++)
    {
        if (!isdigit(p[i]))
        {
            tt=1;
            break;
        }
    }
    if (!tt) return 2;*/
    for (int i=1;i<=l;i++)
    {
        bool tmp=0;
        int q=strlen(hl[i]);
        if (q!=pl) continue;
        for (int j=0;j<pl;j++)
            if (hl[i][j]!=p[j])
            {
                tmp=1;
                break;
            }
        if (!tmp) return 1;
    }
    return 0;
}
int main()
{
    system("color 1F");
    char k[100];
    cout << "请输入文件名:";
    cin>>k;
//  init();
    freopen(k,"r",stdin);
    freopen("out.htm","w",stdout);
    cout << "<div style=\"background-color:white;font-family:courier\">";
    char c;
    char g[100],gl=0;
    while (scanf("%c",&c)!=EOF)
     {
        //system("pause");
        if (((c>='A'&&c<='Z')||(c>='a'&&c<='z')||c=='_')||(c<='9'&&c>='0'&&gl!=0))
        {
            g[gl]=c;
            gl++;
        }
        else
        {
            if (c<='9'&&c>='0'&&gl==0)
//////////////////////////////////////////////////////////////////////////////////Numbers
            {
                cout << "<font color=\"purple\">";
                col(themePAS[4]); cout << c; 
                cout << "</font>" ;
                continue;
            }
            if (gl!=0)
            {
//////////////////////////////////////////////////////////////////////////////////Highlight
                if (check(g,gl)==1)
                {
                    cout << "<strong><font color=\"black\">";
                //  col(themePAS[0]);
                    for(int i=0;i<gl;i++)
                    {
                        cout<<g[i];
                    }
                    cout << "</font></strong>" ;
                }
                else
//////////////////////////////////////////////////////////////////////////////////Normal words
                {
                    cout << "<font color=\"black\">";
                    col(themePAS[1]);
                    for(int i=0;i<gl;i++)
                    {
                        cout<<g[i];
                    }
                    cout << "</font>" ;
                }
            }
            if (c=='#')
//////////////////////////////////////////////////////////////////////////////////Defining
            {
                cout << "<font color=\"green\">";
                col(themePAS[2]);
                cout << c;
                while (1)
                {
                    scanf("%c",&c);
                    if (c=='\n') break;
                    else if (c=='<') cout << "&lt;";
                    else if (c==' ') cout << "&nbsp;";
                    else if (c=='\t') cout << "&nbsp;&nbsp;&nbsp;&nbsp;";
                    else cout<<c;
                }
                cout << "</font> <br>";
            }
            else if (c=='\'')
//////////////////////////////////////////////////////////////////////////////////char
            {
                cout << "<font color=\"black\">";
                col(themePAS[3]);
                cout << c;
                while(1)
                {
                    scanf("%c",&c);
                    if (c=='\'')
                    {
                        cout<<c;
                        break;
                    }
                    else if (c=='<') cout << "&lt;";
                    else
                        if (c=='\\')
                        {
                            cout << c;
                            scanf("%c",&c);
                            cout << c;
                        }
                    else cout<<c;
                }
                cout << "</font>" ;
            }
            else if (c=='\"')
//////////////////////////////////////////////////////////////////////////////////String
            {
                cout << "<strong><font color=\"blue\">";
                col(themePAS[3]);
                cout << c;
                while(1)
                {
                    scanf("%c",&c);
                    if (c=='\"')
                    {
                        cout<<c;
                        break;
                    }
                    else if (c=='<') cout << "&lt;";
                    else
                        if (c=='\\')
                        {
                            cout << c;
                            scanf("%c",&c);
                            cout << c;
                        }
                    else cout<<c;
                }
                cout << "</font></strong>" ;
            }
            else if (c=='\n')
            {
                cout << "<br>\n" ;
            }
            else if (c=='\t')
            {
                cout << "<font color=\"red\">&nbsp;&nbsp;&nbsp;</font>" ;
            }
            else if (c=='<')
            {
                cout << "<strong><font color=\"red\">&lt;</font></strong>" ;
            }
            else if (c=='/') 
            {
//////////////////////////////////////////////////////////////////////////////////Notes
                scanf("%c",&c);
                if (c=='/')
                {
                    cout << "<i><font color=\"#0099FF\">";
                    cout << "//";
                    while (1)
                    {
                        scanf("%c",&c);
                        if (c=='\n') break;
                        else if (c=='<') cout << "&lt;";
                        else if (c==' ') cout << "&nbsp;";
                        else if (c=='\t') cout << "&nbsp;&nbsp;&nbsp;&nbsp;";
                        else cout<<c;
                    }
                    cout << "</font></i><br>\n" ;
                }
                else if (c=='*')
                {
                    cout << "<i><font color=\"#0099FF\">";
                    cout << "/*";
                    while (1)
                    {
                        scanf("%c",&c);
                        if (c=='*')
                        {
                            cout << c;
                            scanf("%c",&c);
                            if (c=='/')
                            {
                                cout << c;
                                break;
                            }
                        }
                        else if (c=='<') cout << "&lt;";
                        else if (c=='\n') cout << "<br>";
                        else if (c==' ') cout << "&nbsp;";
                        else if (c=='\t') cout << "&nbsp;&nbsp;&nbsp;&nbsp;";
                        else cout<<c;
                    }
                    cout << "</font></i><br>\n" ;
                }
            }
            else if (c==' ')
            {
                cout << "<font color=\"red\">&nbsp;</font>" ;
            }
//////////////////////////////////////////////////////////////////////////////////Symbols
            if (c!='/'&&c!=' '&&c!='\''&&c!='\"'&&c!='#'&&c!='<'&&c!='\n')
                cout << "<strong><font color=\"red\">"<<c<<"</font></strong>";
            gl=0;
        }
    }
    cout << "</div>";
    fclose(stdout);
    system("out.htm");
    return 0;
}
