pub.dev using `flutter pub publish`. This is preferred for private packages. ???

in the pubspec.yaml to update to the latest version of the dependences run the code 
    flutter pub upgrade --major-versions
and to only see in the dependences whick have update run
    flutter pub outdated

...
# For information on the generic Dart part of this file, see the
# following page: https://dart.dev/tools/pub/pubspec
...

...
this is inside the flutter:
 # To add assets to your application, add an assets section, like this:
  # assets:
  #   - images/a_dot_burr.jpeg
  #   - images/a_dot_ham.jpeg

  # An image asset can refer to one or more resolution-specific "variants", see
  # https://flutter.dev/to/resolution-aware-images

  # For details regarding adding assets from package dependencies, see
  # https://flutter.dev/to/asset-from-package

  # To add custom fonts to your application, add a fonts section here,
  # in this "flutter" section. Each entry in this list should have a
  # "family" key with the font family name, and a "fonts" key with a
  # list giving the asset and other descriptors for the font. For
  # example:
  # fonts:
  #   - family: Schyler
  #     fonts:
  #       - asset: fonts/Schyler-Regular.ttf
  #       - asset: fonts/Schyler-Italic.ttf
  #         style: italic
  #   - family: Trajan Pro
  #     fonts:
  #       - asset: fonts/TrajanPro.ttf
  #       - asset: fonts/TrajanPro_Bold.ttf
  #         weight: 700
  #
  # For details regarding fonts from package dependencie
...
...
flutter lint https://dart.dev/lints
...

If a widget is defined a build() he automaticaly called every time the widget change
Ex.:
    ...
    @override
    Widget build(BuildContext context) { ... }

The State of variable that will create to project, for now, is save using the ChangeNotifier, follow this example:
    class MyAppState extends ChangeNotifier {
        var current = WordPair.random();
    }
and he is recovered using the context.watch<>();, so
    var appState = context.watch<MyAppState>();
    // in case the appState have a object call current that have a string of two word concatned
obs.: the ChangeNotifier have a function call notifyListeners() what do a reload in the context with for example some var change he value

# Style:
how can put the information of each color and the opacity using the 
    Color.fromRGBO(int, int, int , double)
    // or
    Color.fromARGB(int, int, int , double) // recommend
or using the hexadecimal
    Color(0xAARRGGBB)

the mainAxisAlignment make the area of that component align in center, right or left and the mainAxisSize modified the size of a widget so a widget Row for example have the size 100% of page so if i make
    Row(mainAxisSize: MainAxisSize.min, ...)
he make the row have only the size of the widgets that have


# the gap what is not a gap component
to make a gap between widget you use the widget SizedBox he don't render anything